var jsPsychChat = (function (jspsych) {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */


    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    let auto = false;
    let kind = undefined;
    let ReadableStream$1 = undefined;
    function setShims(shims, options = { auto: false }) {
        if (auto) {
            throw new Error(`you must \`import 'openai/shims/${shims.kind}'\` before importing anything else from openai`);
        }
        if (kind) {
            throw new Error(`can't \`import 'openai/shims/${shims.kind}'\` after \`import 'openai/shims/${kind}'\``);
        }
        auto = options.auto;
        kind = shims.kind;
        shims.fetch;
        shims.Request;
        shims.Response;
        shims.Headers;
        shims.FormData;
        shims.Blob;
        shims.File;
        ReadableStream$1 = shims.ReadableStream;
        shims.getMultipartRequestOptions;
        shims.getDefaultAgent;
        shims.fileFromPath;
        shims.isFsReadStream;
    }

    /**
     * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
     */
    class MultipartBody {
        constructor(body) {
            this.body = body;
        }
        get [Symbol.toStringTag]() {
            return 'MultipartBody';
        }
    }

    function getRuntime({ manuallyImported } = {}) {
        const recommendation = manuallyImported ?
            `You may need to use polyfills`
            : `Add one of these imports before your first \`import … from 'openai'\`:
- \`import 'openai/shims/node'\` (if you're running on Node)
- \`import 'openai/shims/web'\` (otherwise)
`;
        let _fetch, _Request, _Response, _Headers;
        try {
            // @ts-ignore
            _fetch = fetch;
            // @ts-ignore
            _Request = Request;
            // @ts-ignore
            _Response = Response;
            // @ts-ignore
            _Headers = Headers;
        }
        catch (error) {
            throw new Error(`this environment is missing the following Web Fetch API type: ${error.message}. ${recommendation}`);
        }
        return {
            kind: 'web',
            fetch: _fetch,
            Request: _Request,
            Response: _Response,
            Headers: _Headers,
            FormData: 
            // @ts-ignore
            typeof FormData !== 'undefined' ? FormData : (class FormData {
                // @ts-ignore
                constructor() {
                    throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${recommendation}`);
                }
            }),
            Blob: typeof Blob !== 'undefined' ? Blob : (class Blob {
                constructor() {
                    throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${recommendation}`);
                }
            }),
            File: 
            // @ts-ignore
            typeof File !== 'undefined' ? File : (class File {
                // @ts-ignore
                constructor() {
                    throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${recommendation}`);
                }
            }),
            ReadableStream: 
            // @ts-ignore
            typeof ReadableStream !== 'undefined' ? ReadableStream : (class ReadableStream {
                // @ts-ignore
                constructor() {
                    throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${recommendation}`);
                }
            }),
            getMultipartRequestOptions: async (
            // @ts-ignore
            form, opts) => ({
                ...opts,
                body: new MultipartBody(form),
            }),
            getDefaultAgent: (url) => undefined,
            fileFromPath: () => {
                throw new Error('The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads');
            },
            isFsReadStream: (value) => false,
        };
    }

    /**
     * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
     */
    if (!kind) setShims(getRuntime(), { auto: true });

    class Stream {
        constructor(iterator, controller) {
            this.iterator = iterator;
            this.controller = controller;
        }
        static fromSSEResponse(response, controller) {
            let consumed = false;
            async function* iterator() {
                if (consumed) {
                    throw new Error('Cannot iterate over a consumed stream, use `.tee()` to split the stream.');
                }
                consumed = true;
                let done = false;
                try {
                    for await (const sse of _iterSSEMessages(response, controller)) {
                        if (done)
                            continue;
                        if (sse.data.startsWith('[DONE]')) {
                            done = true;
                            continue;
                        }
                        if (sse.event === null) {
                            let data;
                            try {
                                data = JSON.parse(sse.data);
                            }
                            catch (e) {
                                console.error(`Could not parse message into JSON:`, sse.data);
                                console.error(`From chunk:`, sse.raw);
                                throw e;
                            }
                            if (data && data.error) {
                                throw new APIError(undefined, data.error, undefined, undefined);
                            }
                            yield data;
                        }
                        else {
                            let data;
                            try {
                                data = JSON.parse(sse.data);
                            }
                            catch (e) {
                                console.error(`Could not parse message into JSON:`, sse.data);
                                console.error(`From chunk:`, sse.raw);
                                throw e;
                            }
                            // TODO: Is this where the error should be thrown?
                            if (sse.event == 'error') {
                                throw new APIError(undefined, data.error, data.message, undefined);
                            }
                            yield { event: sse.event, data: data };
                        }
                    }
                    done = true;
                }
                catch (e) {
                    // If the user calls `stream.controller.abort()`, we should exit without throwing.
                    if (e instanceof Error && e.name === 'AbortError')
                        return;
                    throw e;
                }
                finally {
                    // If the user `break`s, abort the ongoing request.
                    if (!done)
                        controller.abort();
                }
            }
            return new Stream(iterator, controller);
        }
        /**
         * Generates a Stream from a newline-separated ReadableStream
         * where each item is a JSON value.
         */
        static fromReadableStream(readableStream, controller) {
            let consumed = false;
            async function* iterLines() {
                const lineDecoder = new LineDecoder();
                const iter = readableStreamAsyncIterable(readableStream);
                for await (const chunk of iter) {
                    for (const line of lineDecoder.decode(chunk)) {
                        yield line;
                    }
                }
                for (const line of lineDecoder.flush()) {
                    yield line;
                }
            }
            async function* iterator() {
                if (consumed) {
                    throw new Error('Cannot iterate over a consumed stream, use `.tee()` to split the stream.');
                }
                consumed = true;
                let done = false;
                try {
                    for await (const line of iterLines()) {
                        if (done)
                            continue;
                        if (line)
                            yield JSON.parse(line);
                    }
                    done = true;
                }
                catch (e) {
                    // If the user calls `stream.controller.abort()`, we should exit without throwing.
                    if (e instanceof Error && e.name === 'AbortError')
                        return;
                    throw e;
                }
                finally {
                    // If the user `break`s, abort the ongoing request.
                    if (!done)
                        controller.abort();
                }
            }
            return new Stream(iterator, controller);
        }
        [Symbol.asyncIterator]() {
            return this.iterator();
        }
        /**
         * Splits the stream into two streams which can be
         * independently read from at different speeds.
         */
        tee() {
            const left = [];
            const right = [];
            const iterator = this.iterator();
            const teeIterator = (queue) => {
                return {
                    next: () => {
                        if (queue.length === 0) {
                            const result = iterator.next();
                            left.push(result);
                            right.push(result);
                        }
                        return queue.shift();
                    },
                };
            };
            return [
                new Stream(() => teeIterator(left), this.controller),
                new Stream(() => teeIterator(right), this.controller),
            ];
        }
        /**
         * Converts this stream to a newline-separated ReadableStream of
         * JSON stringified values in the stream
         * which can be turned back into a Stream with `Stream.fromReadableStream()`.
         */
        toReadableStream() {
            const self = this;
            let iter;
            const encoder = new TextEncoder();
            return new ReadableStream$1({
                async start() {
                    iter = self[Symbol.asyncIterator]();
                },
                async pull(ctrl) {
                    try {
                        const { value, done } = await iter.next();
                        if (done)
                            return ctrl.close();
                        const bytes = encoder.encode(JSON.stringify(value) + '\n');
                        ctrl.enqueue(bytes);
                    }
                    catch (err) {
                        ctrl.error(err);
                    }
                },
                async cancel() {
                    await iter.return?.();
                },
            });
        }
    }
    async function* _iterSSEMessages(response, controller) {
        if (!response.body) {
            controller.abort();
            throw new OpenAIError(`Attempted to iterate over a response with no body`);
        }
        const sseDecoder = new SSEDecoder();
        const lineDecoder = new LineDecoder();
        const iter = readableStreamAsyncIterable(response.body);
        for await (const sseChunk of iterSSEChunks(iter)) {
            for (const line of lineDecoder.decode(sseChunk)) {
                const sse = sseDecoder.decode(line);
                if (sse)
                    yield sse;
            }
        }
        for (const line of lineDecoder.flush()) {
            const sse = sseDecoder.decode(line);
            if (sse)
                yield sse;
        }
    }
    /**
     * Given an async iterable iterator, iterates over it and yields full
     * SSE chunks, i.e. yields when a double new-line is encountered.
     */
    async function* iterSSEChunks(iterator) {
        let data = new Uint8Array();
        for await (const chunk of iterator) {
            if (chunk == null) {
                continue;
            }
            const binaryChunk = chunk instanceof ArrayBuffer ? new Uint8Array(chunk)
                : typeof chunk === 'string' ? new TextEncoder().encode(chunk)
                    : chunk;
            let newData = new Uint8Array(data.length + binaryChunk.length);
            newData.set(data);
            newData.set(binaryChunk, data.length);
            data = newData;
            let patternIndex;
            while ((patternIndex = findDoubleNewlineIndex(data)) !== -1) {
                yield data.slice(0, patternIndex);
                data = data.slice(patternIndex);
            }
        }
        if (data.length > 0) {
            yield data;
        }
    }
    function findDoubleNewlineIndex(buffer) {
        // This function searches the buffer for the end patterns (\r\r, \n\n, \r\n\r\n)
        // and returns the index right after the first occurrence of any pattern,
        // or -1 if none of the patterns are found.
        const newline = 0x0a; // \n
        const carriage = 0x0d; // \r
        for (let i = 0; i < buffer.length - 2; i++) {
            if (buffer[i] === newline && buffer[i + 1] === newline) {
                // \n\n
                return i + 2;
            }
            if (buffer[i] === carriage && buffer[i + 1] === carriage) {
                // \r\r
                return i + 2;
            }
            if (buffer[i] === carriage &&
                buffer[i + 1] === newline &&
                i + 3 < buffer.length &&
                buffer[i + 2] === carriage &&
                buffer[i + 3] === newline) {
                // \r\n\r\n
                return i + 4;
            }
        }
        return -1;
    }
    class SSEDecoder {
        constructor() {
            this.event = null;
            this.data = [];
            this.chunks = [];
        }
        decode(line) {
            if (line.endsWith('\r')) {
                line = line.substring(0, line.length - 1);
            }
            if (!line) {
                // empty line and we didn't previously encounter any messages
                if (!this.event && !this.data.length)
                    return null;
                const sse = {
                    event: this.event,
                    data: this.data.join('\n'),
                    raw: this.chunks,
                };
                this.event = null;
                this.data = [];
                this.chunks = [];
                return sse;
            }
            this.chunks.push(line);
            if (line.startsWith(':')) {
                return null;
            }
            let [fieldname, _, value] = partition(line, ':');
            if (value.startsWith(' ')) {
                value = value.substring(1);
            }
            if (fieldname === 'event') {
                this.event = value;
            }
            else if (fieldname === 'data') {
                this.data.push(value);
            }
            return null;
        }
    }
    /**
     * A re-implementation of httpx's `LineDecoder` in Python that handles incrementally
     * reading lines from text.
     *
     * https://github.com/encode/httpx/blob/920333ea98118e9cf617f246905d7b202510941c/httpx/_decoders.py#L258
     */
    class LineDecoder {
        constructor() {
            this.buffer = [];
            this.trailingCR = false;
        }
        decode(chunk) {
            let text = this.decodeText(chunk);
            if (this.trailingCR) {
                text = '\r' + text;
                this.trailingCR = false;
            }
            if (text.endsWith('\r')) {
                this.trailingCR = true;
                text = text.slice(0, -1);
            }
            if (!text) {
                return [];
            }
            const trailingNewline = LineDecoder.NEWLINE_CHARS.has(text[text.length - 1] || '');
            let lines = text.split(LineDecoder.NEWLINE_REGEXP);
            // if there is a trailing new line then the last entry will be an empty
            // string which we don't care about
            if (trailingNewline) {
                lines.pop();
            }
            if (lines.length === 1 && !trailingNewline) {
                this.buffer.push(lines[0]);
                return [];
            }
            if (this.buffer.length > 0) {
                lines = [this.buffer.join('') + lines[0], ...lines.slice(1)];
                this.buffer = [];
            }
            if (!trailingNewline) {
                this.buffer = [lines.pop() || ''];
            }
            return lines;
        }
        decodeText(bytes) {
            if (bytes == null)
                return '';
            if (typeof bytes === 'string')
                return bytes;
            // Node:
            if (typeof Buffer !== 'undefined') {
                if (bytes instanceof Buffer) {
                    return bytes.toString();
                }
                if (bytes instanceof Uint8Array) {
                    return Buffer.from(bytes).toString();
                }
                throw new OpenAIError(`Unexpected: received non-Uint8Array (${bytes.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`);
            }
            // Browser
            if (typeof TextDecoder !== 'undefined') {
                if (bytes instanceof Uint8Array || bytes instanceof ArrayBuffer) {
                    this.textDecoder ?? (this.textDecoder = new TextDecoder('utf8'));
                    return this.textDecoder.decode(bytes);
                }
                throw new OpenAIError(`Unexpected: received non-Uint8Array/ArrayBuffer (${bytes.constructor.name}) in a web platform. Please report this error.`);
            }
            throw new OpenAIError(`Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.`);
        }
        flush() {
            if (!this.buffer.length && !this.trailingCR) {
                return [];
            }
            const lines = [this.buffer.join('')];
            this.buffer = [];
            this.trailingCR = false;
            return lines;
        }
    }
    // prettier-ignore
    LineDecoder.NEWLINE_CHARS = new Set(['\n', '\r']);
    LineDecoder.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
    function partition(str, delimiter) {
        const index = str.indexOf(delimiter);
        if (index !== -1) {
            return [str.substring(0, index), delimiter, str.substring(index + delimiter.length)];
        }
        return [str, '', ''];
    }
    /**
     * Most browsers don't yet have async iterable support for ReadableStream,
     * and Node has a very different way of reading bytes from its "ReadableStream".
     *
     * This polyfill was pulled from https://github.com/MattiasBuelens/web-streams-polyfill/pull/122#issuecomment-1627354490
     */
    function readableStreamAsyncIterable(stream) {
        if (stream[Symbol.asyncIterator])
            return stream;
        const reader = stream.getReader();
        return {
            async next() {
                try {
                    const result = await reader.read();
                    if (result?.done)
                        reader.releaseLock(); // release lock when stream becomes closed
                    return result;
                }
                catch (e) {
                    reader.releaseLock(); // release lock when stream becomes errored
                    throw e;
                }
            },
            async return() {
                const cancelPromise = reader.cancel();
                reader.releaseLock();
                await cancelPromise;
                return { done: true, value: undefined };
            },
            [Symbol.asyncIterator]() {
                return this;
            },
        };
    }

    (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    const castToError = (err) => {
        if (err instanceof Error)
            return err;
        return new Error(err);
    };

    // File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
    class OpenAIError extends Error {
    }
    class APIError extends OpenAIError {
        constructor(status, error, message, headers) {
            super(`${APIError.makeMessage(status, error, message)}`);
            this.status = status;
            this.headers = headers;
            this.request_id = headers?.['x-request-id'];
            const data = error;
            this.error = data;
            this.code = data?.['code'];
            this.param = data?.['param'];
            this.type = data?.['type'];
        }
        static makeMessage(status, error, message) {
            const msg = error?.message ?
                typeof error.message === 'string' ?
                    error.message
                    : JSON.stringify(error.message)
                : error ? JSON.stringify(error)
                    : message;
            if (status && msg) {
                return `${status} ${msg}`;
            }
            if (status) {
                return `${status} status code (no body)`;
            }
            if (msg) {
                return msg;
            }
            return '(no status code or body)';
        }
        static generate(status, errorResponse, message, headers) {
            if (!status) {
                return new APIConnectionError({ cause: castToError(errorResponse) });
            }
            const error = errorResponse?.['error'];
            if (status === 400) {
                return new BadRequestError(status, error, message, headers);
            }
            if (status === 401) {
                return new AuthenticationError(status, error, message, headers);
            }
            if (status === 403) {
                return new PermissionDeniedError(status, error, message, headers);
            }
            if (status === 404) {
                return new NotFoundError(status, error, message, headers);
            }
            if (status === 409) {
                return new ConflictError(status, error, message, headers);
            }
            if (status === 422) {
                return new UnprocessableEntityError(status, error, message, headers);
            }
            if (status === 429) {
                return new RateLimitError(status, error, message, headers);
            }
            if (status >= 500) {
                return new InternalServerError(status, error, message, headers);
            }
            return new APIError(status, error, message, headers);
        }
    }
    class APIUserAbortError extends APIError {
        constructor({ message } = {}) {
            super(undefined, undefined, message || 'Request was aborted.', undefined);
            this.status = undefined;
        }
    }
    class APIConnectionError extends APIError {
        constructor({ message, cause }) {
            super(undefined, undefined, message || 'Connection error.', undefined);
            this.status = undefined;
            // in some environments the 'cause' property is already declared
            // @ts-ignore
            if (cause)
                this.cause = cause;
        }
    }
    class BadRequestError extends APIError {
        constructor() {
            super(...arguments);
            this.status = 400;
        }
    }
    class AuthenticationError extends APIError {
        constructor() {
            super(...arguments);
            this.status = 401;
        }
    }
    class PermissionDeniedError extends APIError {
        constructor() {
            super(...arguments);
            this.status = 403;
        }
    }
    class NotFoundError extends APIError {
        constructor() {
            super(...arguments);
            this.status = 404;
        }
    }
    class ConflictError extends APIError {
        constructor() {
            super(...arguments);
            this.status = 409;
        }
    }
    class UnprocessableEntityError extends APIError {
        constructor() {
            super(...arguments);
            this.status = 422;
        }
    }
    class RateLimitError extends APIError {
        constructor() {
            super(...arguments);
            this.status = 429;
        }
    }
    class InternalServerError extends APIError {
    }

    function isRunnableFunctionWithParse(fn) {
        return typeof fn.parse === 'function';
    }

    const isAssistantMessage = (message) => {
        return message?.role === 'assistant';
    };
    const isFunctionMessage = (message) => {
        return message?.role === 'function';
    };
    const isToolMessage = (message) => {
        return message?.role === 'tool';
    };

    var __classPrivateFieldSet$1 = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var __classPrivateFieldGet$1 = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _AbstractChatCompletionRunner_instances, _AbstractChatCompletionRunner_connectedPromise, _AbstractChatCompletionRunner_resolveConnectedPromise, _AbstractChatCompletionRunner_rejectConnectedPromise, _AbstractChatCompletionRunner_endPromise, _AbstractChatCompletionRunner_resolveEndPromise, _AbstractChatCompletionRunner_rejectEndPromise, _AbstractChatCompletionRunner_listeners, _AbstractChatCompletionRunner_ended, _AbstractChatCompletionRunner_errored, _AbstractChatCompletionRunner_aborted, _AbstractChatCompletionRunner_catchingPromiseCreated, _AbstractChatCompletionRunner_getFinalContent, _AbstractChatCompletionRunner_getFinalMessage, _AbstractChatCompletionRunner_getFinalFunctionCall, _AbstractChatCompletionRunner_getFinalFunctionCallResult, _AbstractChatCompletionRunner_calculateTotalUsage, _AbstractChatCompletionRunner_handleError, _AbstractChatCompletionRunner_validateParams, _AbstractChatCompletionRunner_stringifyFunctionCallResult;
    const DEFAULT_MAX_CHAT_COMPLETIONS = 10;
    class AbstractChatCompletionRunner {
        constructor() {
            _AbstractChatCompletionRunner_instances.add(this);
            this.controller = new AbortController();
            _AbstractChatCompletionRunner_connectedPromise.set(this, void 0);
            _AbstractChatCompletionRunner_resolveConnectedPromise.set(this, () => { });
            _AbstractChatCompletionRunner_rejectConnectedPromise.set(this, () => { });
            _AbstractChatCompletionRunner_endPromise.set(this, void 0);
            _AbstractChatCompletionRunner_resolveEndPromise.set(this, () => { });
            _AbstractChatCompletionRunner_rejectEndPromise.set(this, () => { });
            _AbstractChatCompletionRunner_listeners.set(this, {});
            this._chatCompletions = [];
            this.messages = [];
            _AbstractChatCompletionRunner_ended.set(this, false);
            _AbstractChatCompletionRunner_errored.set(this, false);
            _AbstractChatCompletionRunner_aborted.set(this, false);
            _AbstractChatCompletionRunner_catchingPromiseCreated.set(this, false);
            _AbstractChatCompletionRunner_handleError.set(this, (error) => {
                __classPrivateFieldSet$1(this, _AbstractChatCompletionRunner_errored, true, "f");
                if (error instanceof Error && error.name === 'AbortError') {
                    error = new APIUserAbortError();
                }
                if (error instanceof APIUserAbortError) {
                    __classPrivateFieldSet$1(this, _AbstractChatCompletionRunner_aborted, true, "f");
                    return this._emit('abort', error);
                }
                if (error instanceof OpenAIError) {
                    return this._emit('error', error);
                }
                if (error instanceof Error) {
                    const openAIError = new OpenAIError(error.message);
                    // @ts-ignore
                    openAIError.cause = error;
                    return this._emit('error', openAIError);
                }
                return this._emit('error', new OpenAIError(String(error)));
            });
            __classPrivateFieldSet$1(this, _AbstractChatCompletionRunner_connectedPromise, new Promise((resolve, reject) => {
                __classPrivateFieldSet$1(this, _AbstractChatCompletionRunner_resolveConnectedPromise, resolve, "f");
                __classPrivateFieldSet$1(this, _AbstractChatCompletionRunner_rejectConnectedPromise, reject, "f");
            }), "f");
            __classPrivateFieldSet$1(this, _AbstractChatCompletionRunner_endPromise, new Promise((resolve, reject) => {
                __classPrivateFieldSet$1(this, _AbstractChatCompletionRunner_resolveEndPromise, resolve, "f");
                __classPrivateFieldSet$1(this, _AbstractChatCompletionRunner_rejectEndPromise, reject, "f");
            }), "f");
            // Don't let these promises cause unhandled rejection errors.
            // we will manually cause an unhandled rejection error later
            // if the user hasn't registered any error listener or called
            // any promise-returning method.
            __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_connectedPromise, "f").catch(() => { });
            __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_endPromise, "f").catch(() => { });
        }
        _run(executor) {
            // Unfortunately if we call `executor()` immediately we get runtime errors about
            // references to `this` before the `super()` constructor call returns.
            setTimeout(() => {
                executor().then(() => {
                    this._emitFinal();
                    this._emit('end');
                }, __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_handleError, "f"));
            }, 0);
        }
        _addChatCompletion(chatCompletion) {
            this._chatCompletions.push(chatCompletion);
            this._emit('chatCompletion', chatCompletion);
            const message = chatCompletion.choices[0]?.message;
            if (message)
                this._addMessage(message);
            return chatCompletion;
        }
        _addMessage(message, emit = true) {
            if (!('content' in message))
                message.content = null;
            this.messages.push(message);
            if (emit) {
                this._emit('message', message);
                if ((isFunctionMessage(message) || isToolMessage(message)) && message.content) {
                    // Note, this assumes that {role: 'tool', content: …} is always the result of a call of tool of type=function.
                    this._emit('functionCallResult', message.content);
                }
                else if (isAssistantMessage(message) && message.function_call) {
                    this._emit('functionCall', message.function_call);
                }
                else if (isAssistantMessage(message) && message.tool_calls) {
                    for (const tool_call of message.tool_calls) {
                        if (tool_call.type === 'function') {
                            this._emit('functionCall', tool_call.function);
                        }
                    }
                }
            }
        }
        _connected() {
            if (this.ended)
                return;
            __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_resolveConnectedPromise, "f").call(this);
            this._emit('connect');
        }
        get ended() {
            return __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_ended, "f");
        }
        get errored() {
            return __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_errored, "f");
        }
        get aborted() {
            return __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_aborted, "f");
        }
        abort() {
            this.controller.abort();
        }
        /**
         * Adds the listener function to the end of the listeners array for the event.
         * No checks are made to see if the listener has already been added. Multiple calls passing
         * the same combination of event and listener will result in the listener being added, and
         * called, multiple times.
         * @returns this ChatCompletionStream, so that calls can be chained
         */
        on(event, listener) {
            const listeners = __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_listeners, "f")[event] || (__classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_listeners, "f")[event] = []);
            listeners.push({ listener });
            return this;
        }
        /**
         * Removes the specified listener from the listener array for the event.
         * off() will remove, at most, one instance of a listener from the listener array. If any single
         * listener has been added multiple times to the listener array for the specified event, then
         * off() must be called multiple times to remove each instance.
         * @returns this ChatCompletionStream, so that calls can be chained
         */
        off(event, listener) {
            const listeners = __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_listeners, "f")[event];
            if (!listeners)
                return this;
            const index = listeners.findIndex((l) => l.listener === listener);
            if (index >= 0)
                listeners.splice(index, 1);
            return this;
        }
        /**
         * Adds a one-time listener function for the event. The next time the event is triggered,
         * this listener is removed and then invoked.
         * @returns this ChatCompletionStream, so that calls can be chained
         */
        once(event, listener) {
            const listeners = __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_listeners, "f")[event] || (__classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_listeners, "f")[event] = []);
            listeners.push({ listener, once: true });
            return this;
        }
        /**
         * This is similar to `.once()`, but returns a Promise that resolves the next time
         * the event is triggered, instead of calling a listener callback.
         * @returns a Promise that resolves the next time given event is triggered,
         * or rejects if an error is emitted.  (If you request the 'error' event,
         * returns a promise that resolves with the error).
         *
         * Example:
         *
         *   const message = await stream.emitted('message') // rejects if the stream errors
         */
        emitted(event) {
            return new Promise((resolve, reject) => {
                __classPrivateFieldSet$1(this, _AbstractChatCompletionRunner_catchingPromiseCreated, true, "f");
                if (event !== 'error')
                    this.once('error', reject);
                this.once(event, resolve);
            });
        }
        async done() {
            __classPrivateFieldSet$1(this, _AbstractChatCompletionRunner_catchingPromiseCreated, true, "f");
            await __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_endPromise, "f");
        }
        /**
         * @returns a promise that resolves with the final ChatCompletion, or rejects
         * if an error occurred or the stream ended prematurely without producing a ChatCompletion.
         */
        async finalChatCompletion() {
            await this.done();
            const completion = this._chatCompletions[this._chatCompletions.length - 1];
            if (!completion)
                throw new OpenAIError('stream ended without producing a ChatCompletion');
            return completion;
        }
        /**
         * @returns a promise that resolves with the content of the final ChatCompletionMessage, or rejects
         * if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
         */
        async finalContent() {
            await this.done();
            return __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalContent).call(this);
        }
        /**
         * @returns a promise that resolves with the the final assistant ChatCompletionMessage response,
         * or rejects if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
         */
        async finalMessage() {
            await this.done();
            return __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this);
        }
        /**
         * @returns a promise that resolves with the content of the final FunctionCall, or rejects
         * if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
         */
        async finalFunctionCall() {
            await this.done();
            return __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCall).call(this);
        }
        async finalFunctionCallResult() {
            await this.done();
            return __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCallResult).call(this);
        }
        async totalUsage() {
            await this.done();
            return __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_calculateTotalUsage).call(this);
        }
        allChatCompletions() {
            return [...this._chatCompletions];
        }
        _emit(event, ...args) {
            // make sure we don't emit any events after end
            if (__classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_ended, "f")) {
                return;
            }
            if (event === 'end') {
                __classPrivateFieldSet$1(this, _AbstractChatCompletionRunner_ended, true, "f");
                __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_resolveEndPromise, "f").call(this);
            }
            const listeners = __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_listeners, "f")[event];
            if (listeners) {
                __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_listeners, "f")[event] = listeners.filter((l) => !l.once);
                listeners.forEach(({ listener }) => listener(...args));
            }
            if (event === 'abort') {
                const error = args[0];
                if (!__classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_catchingPromiseCreated, "f") && !listeners?.length) {
                    Promise.reject(error);
                }
                __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_rejectConnectedPromise, "f").call(this, error);
                __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_rejectEndPromise, "f").call(this, error);
                this._emit('end');
                return;
            }
            if (event === 'error') {
                // NOTE: _emit('error', error) should only be called from #handleError().
                const error = args[0];
                if (!__classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_catchingPromiseCreated, "f") && !listeners?.length) {
                    // Trigger an unhandled rejection if the user hasn't registered any error handlers.
                    // If you are seeing stack traces here, make sure to handle errors via either:
                    // - runner.on('error', () => ...)
                    // - await runner.done()
                    // - await runner.finalChatCompletion()
                    // - etc.
                    Promise.reject(error);
                }
                __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_rejectConnectedPromise, "f").call(this, error);
                __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_rejectEndPromise, "f").call(this, error);
                this._emit('end');
            }
        }
        _emitFinal() {
            const completion = this._chatCompletions[this._chatCompletions.length - 1];
            if (completion)
                this._emit('finalChatCompletion', completion);
            const finalMessage = __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this);
            if (finalMessage)
                this._emit('finalMessage', finalMessage);
            const finalContent = __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalContent).call(this);
            if (finalContent)
                this._emit('finalContent', finalContent);
            const finalFunctionCall = __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCall).call(this);
            if (finalFunctionCall)
                this._emit('finalFunctionCall', finalFunctionCall);
            const finalFunctionCallResult = __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCallResult).call(this);
            if (finalFunctionCallResult != null)
                this._emit('finalFunctionCallResult', finalFunctionCallResult);
            if (this._chatCompletions.some((c) => c.usage)) {
                this._emit('totalUsage', __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_calculateTotalUsage).call(this));
            }
        }
        async _createChatCompletion(completions, params, options) {
            const signal = options?.signal;
            if (signal) {
                if (signal.aborted)
                    this.controller.abort();
                signal.addEventListener('abort', () => this.controller.abort());
            }
            __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_validateParams).call(this, params);
            const chatCompletion = await completions.create({ ...params, stream: false }, { ...options, signal: this.controller.signal });
            this._connected();
            return this._addChatCompletion(chatCompletion);
        }
        async _runChatCompletion(completions, params, options) {
            for (const message of params.messages) {
                this._addMessage(message, false);
            }
            return await this._createChatCompletion(completions, params, options);
        }
        async _runFunctions(completions, params, options) {
            const role = 'function';
            const { function_call = 'auto', stream, ...restParams } = params;
            const singleFunctionToCall = typeof function_call !== 'string' && function_call?.name;
            const { maxChatCompletions = DEFAULT_MAX_CHAT_COMPLETIONS } = options || {};
            const functionsByName = {};
            for (const f of params.functions) {
                functionsByName[f.name || f.function.name] = f;
            }
            const functions = params.functions.map((f) => ({
                name: f.name || f.function.name,
                parameters: f.parameters,
                description: f.description,
            }));
            for (const message of params.messages) {
                this._addMessage(message, false);
            }
            for (let i = 0; i < maxChatCompletions; ++i) {
                const chatCompletion = await this._createChatCompletion(completions, {
                    ...restParams,
                    function_call,
                    functions,
                    messages: [...this.messages],
                }, options);
                const message = chatCompletion.choices[0]?.message;
                if (!message) {
                    throw new OpenAIError(`missing message in ChatCompletion response`);
                }
                if (!message.function_call)
                    return;
                const { name, arguments: args } = message.function_call;
                const fn = functionsByName[name];
                if (!fn) {
                    const content = `Invalid function_call: ${JSON.stringify(name)}. Available options are: ${functions
                    .map((f) => JSON.stringify(f.name))
                    .join(', ')}. Please try again`;
                    this._addMessage({ role, name, content });
                    continue;
                }
                else if (singleFunctionToCall && singleFunctionToCall !== name) {
                    const content = `Invalid function_call: ${JSON.stringify(name)}. ${JSON.stringify(singleFunctionToCall)} requested. Please try again`;
                    this._addMessage({ role, name, content });
                    continue;
                }
                let parsed;
                try {
                    parsed = isRunnableFunctionWithParse(fn) ? await fn.parse(args) : args;
                }
                catch (error) {
                    this._addMessage({
                        role,
                        name,
                        content: error instanceof Error ? error.message : String(error),
                    });
                    continue;
                }
                // @ts-expect-error it can't rule out `never` type.
                const rawContent = await fn.function(parsed, this);
                const content = __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_stringifyFunctionCallResult).call(this, rawContent);
                this._addMessage({ role, name, content });
                if (singleFunctionToCall)
                    return;
            }
        }
        async _runTools(completions, params, options) {
            const role = 'tool';
            const { tool_choice = 'auto', stream, ...restParams } = params;
            const singleFunctionToCall = typeof tool_choice !== 'string' && tool_choice?.function?.name;
            const { maxChatCompletions = DEFAULT_MAX_CHAT_COMPLETIONS } = options || {};
            const functionsByName = {};
            for (const f of params.tools) {
                if (f.type === 'function') {
                    functionsByName[f.function.name || f.function.function.name] = f.function;
                }
            }
            const tools = 'tools' in params ?
                params.tools.map((t) => t.type === 'function' ?
                    {
                        type: 'function',
                        function: {
                            name: t.function.name || t.function.function.name,
                            parameters: t.function.parameters,
                            description: t.function.description,
                        },
                    }
                    : t)
                : undefined;
            for (const message of params.messages) {
                this._addMessage(message, false);
            }
            for (let i = 0; i < maxChatCompletions; ++i) {
                const chatCompletion = await this._createChatCompletion(completions, {
                    ...restParams,
                    tool_choice,
                    tools,
                    messages: [...this.messages],
                }, options);
                const message = chatCompletion.choices[0]?.message;
                if (!message) {
                    throw new OpenAIError(`missing message in ChatCompletion response`);
                }
                if (!message.tool_calls) {
                    return;
                }
                for (const tool_call of message.tool_calls) {
                    if (tool_call.type !== 'function')
                        continue;
                    const tool_call_id = tool_call.id;
                    const { name, arguments: args } = tool_call.function;
                    const fn = functionsByName[name];
                    if (!fn) {
                        const content = `Invalid tool_call: ${JSON.stringify(name)}. Available options are: ${tools
                        .map((f) => JSON.stringify(f.function.name))
                        .join(', ')}. Please try again`;
                        this._addMessage({ role, tool_call_id, content });
                        continue;
                    }
                    else if (singleFunctionToCall && singleFunctionToCall !== name) {
                        const content = `Invalid tool_call: ${JSON.stringify(name)}. ${JSON.stringify(singleFunctionToCall)} requested. Please try again`;
                        this._addMessage({ role, tool_call_id, content });
                        continue;
                    }
                    let parsed;
                    try {
                        parsed = isRunnableFunctionWithParse(fn) ? await fn.parse(args) : args;
                    }
                    catch (error) {
                        const content = error instanceof Error ? error.message : String(error);
                        this._addMessage({ role, tool_call_id, content });
                        continue;
                    }
                    // @ts-expect-error it can't rule out `never` type.
                    const rawContent = await fn.function(parsed, this);
                    const content = __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_stringifyFunctionCallResult).call(this, rawContent);
                    this._addMessage({ role, tool_call_id, content });
                    if (singleFunctionToCall) {
                        return;
                    }
                }
            }
            return;
        }
    }
    _AbstractChatCompletionRunner_connectedPromise = new WeakMap(), _AbstractChatCompletionRunner_resolveConnectedPromise = new WeakMap(), _AbstractChatCompletionRunner_rejectConnectedPromise = new WeakMap(), _AbstractChatCompletionRunner_endPromise = new WeakMap(), _AbstractChatCompletionRunner_resolveEndPromise = new WeakMap(), _AbstractChatCompletionRunner_rejectEndPromise = new WeakMap(), _AbstractChatCompletionRunner_listeners = new WeakMap(), _AbstractChatCompletionRunner_ended = new WeakMap(), _AbstractChatCompletionRunner_errored = new WeakMap(), _AbstractChatCompletionRunner_aborted = new WeakMap(), _AbstractChatCompletionRunner_catchingPromiseCreated = new WeakMap(), _AbstractChatCompletionRunner_handleError = new WeakMap(), _AbstractChatCompletionRunner_instances = new WeakSet(), _AbstractChatCompletionRunner_getFinalContent = function _AbstractChatCompletionRunner_getFinalContent() {
        return __classPrivateFieldGet$1(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this).content ?? null;
    }, _AbstractChatCompletionRunner_getFinalMessage = function _AbstractChatCompletionRunner_getFinalMessage() {
        let i = this.messages.length;
        while (i-- > 0) {
            const message = this.messages[i];
            if (isAssistantMessage(message)) {
                return { ...message, content: message.content ?? null };
            }
        }
        throw new OpenAIError('stream ended without producing a ChatCompletionMessage with role=assistant');
    }, _AbstractChatCompletionRunner_getFinalFunctionCall = function _AbstractChatCompletionRunner_getFinalFunctionCall() {
        for (let i = this.messages.length - 1; i >= 0; i--) {
            const message = this.messages[i];
            if (isAssistantMessage(message) && message?.function_call) {
                return message.function_call;
            }
            if (isAssistantMessage(message) && message?.tool_calls?.length) {
                return message.tool_calls.at(-1)?.function;
            }
        }
        return;
    }, _AbstractChatCompletionRunner_getFinalFunctionCallResult = function _AbstractChatCompletionRunner_getFinalFunctionCallResult() {
        for (let i = this.messages.length - 1; i >= 0; i--) {
            const message = this.messages[i];
            if (isFunctionMessage(message) && message.content != null) {
                return message.content;
            }
            if (isToolMessage(message) &&
                message.content != null &&
                this.messages.some((x) => x.role === 'assistant' &&
                    x.tool_calls?.some((y) => y.type === 'function' && y.id === message.tool_call_id))) {
                return message.content;
            }
        }
        return;
    }, _AbstractChatCompletionRunner_calculateTotalUsage = function _AbstractChatCompletionRunner_calculateTotalUsage() {
        const total = {
            completion_tokens: 0,
            prompt_tokens: 0,
            total_tokens: 0,
        };
        for (const { usage } of this._chatCompletions) {
            if (usage) {
                total.completion_tokens += usage.completion_tokens;
                total.prompt_tokens += usage.prompt_tokens;
                total.total_tokens += usage.total_tokens;
            }
        }
        return total;
    }, _AbstractChatCompletionRunner_validateParams = function _AbstractChatCompletionRunner_validateParams(params) {
        if (params.n != null && params.n > 1) {
            throw new OpenAIError('ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.');
        }
    }, _AbstractChatCompletionRunner_stringifyFunctionCallResult = function _AbstractChatCompletionRunner_stringifyFunctionCallResult(rawContent) {
        return (typeof rawContent === 'string' ? rawContent
            : rawContent === undefined ? 'undefined'
                : JSON.stringify(rawContent));
    };

    var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };
    var _ChatCompletionStream_instances, _ChatCompletionStream_currentChatCompletionSnapshot, _ChatCompletionStream_beginRequest, _ChatCompletionStream_addChunk, _ChatCompletionStream_endRequest, _ChatCompletionStream_accumulateChatCompletion;
    class ChatCompletionStream extends AbstractChatCompletionRunner {
        constructor() {
            super(...arguments);
            _ChatCompletionStream_instances.add(this);
            _ChatCompletionStream_currentChatCompletionSnapshot.set(this, void 0);
        }
        get currentChatCompletionSnapshot() {
            return __classPrivateFieldGet(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
        }
        /**
         * Intended for use on the frontend, consuming a stream produced with
         * `.toReadableStream()` on the backend.
         *
         * Note that messages sent to the model do not appear in `.on('message')`
         * in this context.
         */
        static fromReadableStream(stream) {
            const runner = new ChatCompletionStream();
            runner._run(() => runner._fromReadableStream(stream));
            return runner;
        }
        static createChatCompletion(completions, params, options) {
            const runner = new ChatCompletionStream();
            runner._run(() => runner._runChatCompletion(completions, { ...params, stream: true }, { ...options, headers: { ...options?.headers, 'X-Stainless-Helper-Method': 'stream' } }));
            return runner;
        }
        async _createChatCompletion(completions, params, options) {
            const signal = options?.signal;
            if (signal) {
                if (signal.aborted)
                    this.controller.abort();
                signal.addEventListener('abort', () => this.controller.abort());
            }
            __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_beginRequest).call(this);
            const stream = await completions.create({ ...params, stream: true }, { ...options, signal: this.controller.signal });
            this._connected();
            for await (const chunk of stream) {
                __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_addChunk).call(this, chunk);
            }
            if (stream.controller.signal?.aborted) {
                throw new APIUserAbortError();
            }
            return this._addChatCompletion(__classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
        }
        async _fromReadableStream(readableStream, options) {
            const signal = options?.signal;
            if (signal) {
                if (signal.aborted)
                    this.controller.abort();
                signal.addEventListener('abort', () => this.controller.abort());
            }
            __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_beginRequest).call(this);
            this._connected();
            const stream = Stream.fromReadableStream(readableStream, this.controller);
            let chatId;
            for await (const chunk of stream) {
                if (chatId && chatId !== chunk.id) {
                    // A new request has been made.
                    this._addChatCompletion(__classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
                }
                __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_addChunk).call(this, chunk);
                chatId = chunk.id;
            }
            if (stream.controller.signal?.aborted) {
                throw new APIUserAbortError();
            }
            return this._addChatCompletion(__classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
        }
        [(_ChatCompletionStream_currentChatCompletionSnapshot = new WeakMap(), _ChatCompletionStream_instances = new WeakSet(), _ChatCompletionStream_beginRequest = function _ChatCompletionStream_beginRequest() {
            if (this.ended)
                return;
            __classPrivateFieldSet(this, _ChatCompletionStream_currentChatCompletionSnapshot, undefined, "f");
        }, _ChatCompletionStream_addChunk = function _ChatCompletionStream_addChunk(chunk) {
            if (this.ended)
                return;
            const completion = __classPrivateFieldGet(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_accumulateChatCompletion).call(this, chunk);
            this._emit('chunk', chunk, completion);
            const delta = chunk.choices[0]?.delta?.content;
            const snapshot = completion.choices[0]?.message;
            if (delta != null && snapshot?.role === 'assistant' && snapshot?.content) {
                this._emit('content', delta, snapshot.content);
            }
        }, _ChatCompletionStream_endRequest = function _ChatCompletionStream_endRequest() {
            if (this.ended) {
                throw new OpenAIError(`stream has ended, this shouldn't happen`);
            }
            const snapshot = __classPrivateFieldGet(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
            if (!snapshot) {
                throw new OpenAIError(`request ended without sending any chunks`);
            }
            __classPrivateFieldSet(this, _ChatCompletionStream_currentChatCompletionSnapshot, undefined, "f");
            return finalizeChatCompletion(snapshot);
        }, _ChatCompletionStream_accumulateChatCompletion = function _ChatCompletionStream_accumulateChatCompletion(chunk) {
            var _a, _b, _c;
            let snapshot = __classPrivateFieldGet(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
            const { choices, ...rest } = chunk;
            if (!snapshot) {
                snapshot = __classPrivateFieldSet(this, _ChatCompletionStream_currentChatCompletionSnapshot, {
                    ...rest,
                    choices: [],
                }, "f");
            }
            else {
                Object.assign(snapshot, rest);
            }
            for (const { delta, finish_reason, index, logprobs = null, ...other } of chunk.choices) {
                let choice = snapshot.choices[index];
                if (!choice) {
                    choice = snapshot.choices[index] = { finish_reason, index, message: {}, logprobs, ...other };
                }
                if (logprobs) {
                    if (!choice.logprobs) {
                        choice.logprobs = Object.assign({}, logprobs);
                    }
                    else {
                        const { content, ...rest } = logprobs;
                        Object.assign(choice.logprobs, rest);
                        if (content) {
                            (_a = choice.logprobs).content ?? (_a.content = []);
                            choice.logprobs.content.push(...content);
                        }
                    }
                }
                if (finish_reason)
                    choice.finish_reason = finish_reason;
                Object.assign(choice, other);
                if (!delta)
                    continue; // Shouldn't happen; just in case.
                const { content, function_call, role, tool_calls, ...rest } = delta;
                Object.assign(choice.message, rest);
                if (content)
                    choice.message.content = (choice.message.content || '') + content;
                if (role)
                    choice.message.role = role;
                if (function_call) {
                    if (!choice.message.function_call) {
                        choice.message.function_call = function_call;
                    }
                    else {
                        if (function_call.name)
                            choice.message.function_call.name = function_call.name;
                        if (function_call.arguments) {
                            (_b = choice.message.function_call).arguments ?? (_b.arguments = '');
                            choice.message.function_call.arguments += function_call.arguments;
                        }
                    }
                }
                if (tool_calls) {
                    if (!choice.message.tool_calls)
                        choice.message.tool_calls = [];
                    for (const { index, id, type, function: fn, ...rest } of tool_calls) {
                        const tool_call = ((_c = choice.message.tool_calls)[index] ?? (_c[index] = {}));
                        Object.assign(tool_call, rest);
                        if (id)
                            tool_call.id = id;
                        if (type)
                            tool_call.type = type;
                        if (fn)
                            tool_call.function ?? (tool_call.function = { arguments: '' });
                        if (fn?.name)
                            tool_call.function.name = fn.name;
                        if (fn?.arguments)
                            tool_call.function.arguments += fn.arguments;
                    }
                }
            }
            return snapshot;
        }, Symbol.asyncIterator)]() {
            const pushQueue = [];
            const readQueue = [];
            let done = false;
            this.on('chunk', (chunk) => {
                const reader = readQueue.shift();
                if (reader) {
                    reader.resolve(chunk);
                }
                else {
                    pushQueue.push(chunk);
                }
            });
            this.on('end', () => {
                done = true;
                for (const reader of readQueue) {
                    reader.resolve(undefined);
                }
                readQueue.length = 0;
            });
            this.on('abort', (err) => {
                done = true;
                for (const reader of readQueue) {
                    reader.reject(err);
                }
                readQueue.length = 0;
            });
            this.on('error', (err) => {
                done = true;
                for (const reader of readQueue) {
                    reader.reject(err);
                }
                readQueue.length = 0;
            });
            return {
                next: async () => {
                    if (!pushQueue.length) {
                        if (done) {
                            return { value: undefined, done: true };
                        }
                        return new Promise((resolve, reject) => readQueue.push({ resolve, reject })).then((chunk) => (chunk ? { value: chunk, done: false } : { value: undefined, done: true }));
                    }
                    const chunk = pushQueue.shift();
                    return { value: chunk, done: false };
                },
                return: async () => {
                    this.abort();
                    return { value: undefined, done: true };
                },
            };
        }
        toReadableStream() {
            const stream = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
            return stream.toReadableStream();
        }
    }
    function finalizeChatCompletion(snapshot) {
        const { id, choices, created, model, system_fingerprint, ...rest } = snapshot;
        return {
            ...rest,
            id,
            choices: choices.map(({ message, finish_reason, index, logprobs, ...choiceRest }) => {
                if (!finish_reason)
                    throw new OpenAIError(`missing finish_reason for choice ${index}`);
                const { content = null, function_call, tool_calls, ...messageRest } = message;
                const role = message.role; // this is what we expect; in theory it could be different which would make our types a slight lie but would be fine.
                if (!role)
                    throw new OpenAIError(`missing role for choice ${index}`);
                if (function_call) {
                    const { arguments: args, name } = function_call;
                    if (args == null)
                        throw new OpenAIError(`missing function_call.arguments for choice ${index}`);
                    if (!name)
                        throw new OpenAIError(`missing function_call.name for choice ${index}`);
                    return {
                        ...choiceRest,
                        message: { content, function_call: { arguments: args, name }, role },
                        finish_reason,
                        index,
                        logprobs,
                    };
                }
                if (tool_calls) {
                    return {
                        ...choiceRest,
                        index,
                        finish_reason,
                        logprobs,
                        message: {
                            ...messageRest,
                            role,
                            content,
                            tool_calls: tool_calls.map((tool_call, i) => {
                                const { function: fn, type, id, ...toolRest } = tool_call;
                                const { arguments: args, name, ...fnRest } = fn || {};
                                if (id == null)
                                    throw new OpenAIError(`missing choices[${index}].tool_calls[${i}].id\n${str(snapshot)}`);
                                if (type == null)
                                    throw new OpenAIError(`missing choices[${index}].tool_calls[${i}].type\n${str(snapshot)}`);
                                if (name == null)
                                    throw new OpenAIError(`missing choices[${index}].tool_calls[${i}].function.name\n${str(snapshot)}`);
                                if (args == null)
                                    throw new OpenAIError(`missing choices[${index}].tool_calls[${i}].function.arguments\n${str(snapshot)}`);
                                return { ...toolRest, id, type, function: { ...fnRest, name, arguments: args } };
                            }),
                        },
                    };
                }
                return {
                    ...choiceRest,
                    message: { ...messageRest, content, role },
                    finish_reason,
                    index,
                    logprobs,
                };
            }),
            created,
            model,
            object: 'chat.completion',
            ...(system_fingerprint ? { system_fingerprint } : {}),
        };
    }
    function str(x) {
        return JSON.stringify(x);
    }

    class ChatLog {
        constructor() {
            this.conversation_log = [];
            this.final_data = [];
        }
        setPrompt(prompt) {
            const time = Math.round(performance.now());
            const newMessage = {
                role: "system",
                content: prompt,
                time: time,
            };
            this.final_data.push(newMessage);
            this.prompt = prompt;
        }
        getPrompt() {
            const newElement = { role: "system", content: this.prompt };
            const tempConversationLog = [...this.conversation_log, newElement];
            return tempConversationLog;
        }
        getChatLogs() {
            return this.final_data;
        }
        // updates current prompt, possibly replace to pass in objct
        updateConversationLog(content, role, keyPressLog, message) {
            if (role === "system")
                console.log("WARNING: this case is not caught and is incorrectly trigerring outadated method", "content:", content, "role:", role);
            const time = Math.round(performance.now());
            const newPrompt = { role: role, content: content };
            this.conversation_log.push(newPrompt);
            const newMessage = Object.assign(Object.assign({ role: role, content: content, time: time }, (message ? { message: message } : {})), (keyPressLog ? { keyPressLog: keyPressLog } : {}));
            this.final_data.push(newMessage);
        }
        // logMessage adds message to final data but not conversatin log
        logMessage(message, role) {
            const time = Math.round(performance.now());
            const newMessage = {
                role: role,
                content: message,
                time: time,
            };
            this.final_data.push(newMessage);
        }
        // Chain Condition -- have it be a list of the chain and what happens before and after
        // called when temporary chainPrompting
        cleanConversation() {
            const res = this.conversation_log.filter((message, index, array) => {
                if ("role" in message && message["role"] === "system") {
                    return false;
                }
                // Exclude the last message because will be user message - only want existing conversation
                if (index === array.length - 1) {
                    return false;
                }
                return true;
            });
            return res;
        }
        // call when adding a new prompt
        cleanSystem(prompt, message) {
            // cleans existing prompts
            const res = this.conversation_log.filter((message) => {
                if ("role" in message && message["role"] === "system") {
                    return false;
                }
                return true;
            });
            this.conversation_log = res;
            this.setPrompt(prompt);
            return this.getPrompt();
        }
    }

    const info = {
        name: "chat",
        parameters: {
            // BOOL, STRING, INT, FLOAT, FUNCTION, KEY, KEYS, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
            ai_prompt: {
                type: jspsych.ParameterType.STRING,
                default: undefined,
            },
            ai_model: {
                type: jspsych.ParameterType.STRING,
                default: "gpt-4o",
            },
            chat_field_placeholder: {
                type: jspsych.ParameterType.STRING,
                default: "Type your message here...",
            },
            // bot_name: {
            //   type: ParameterType.STRING,
            //   default: undefined,
            // },
            continue_button: {
                type: jspsych.ParameterType.COMPLEX,
                default: { message_trigger: 0 },
                nested: {
                    timer_trigger: {
                        type: jspsych.ParameterType.INT,
                    },
                    message_trigger: {
                        type: jspsych.ParameterType.INT,
                    },
                    message: {
                        type: jspsych.ParameterType.STRING,
                    },
                },
            },
            additional_prompts: {
                type: jspsych.ParameterType.COMPLEX,
                array: true,
                default: undefined,
                nested: {
                    message: {
                        // messages to display on screen
                        type: jspsych.ParameterType.STRING,
                        default: "",
                    },
                    prompt: {
                        // prompting to pass in
                        type: jspsych.ParameterType.STRING,
                        default: null,
                    },
                    role: {
                        // "prompt" ("system-prompt"), "chatbot-message","chatbot-prompt"
                        type: jspsych.ParameterType.STRING,
                        default: "system-prompt",
                    },
                    message_trigger: {
                        type: jspsych.ParameterType.INT,
                        default: null,
                    },
                    timer_trigger: {
                        type: jspsych.ParameterType.INT,
                        default: null,
                    },
                },
            },
            // when triggers it doesn't stop, do we want to give it a stop?
            prompt_chain: {
                type: jspsych.ParameterType.COMPLEX,
                default: [],
                nested: {
                    prompts: {
                        type: jspsych.ParameterType.STRING,
                        array: true,
                        default: [],
                    },
                    message_trigger: {
                        type: jspsych.ParameterType.INT,
                        default: 99999999999999999999999, // silencing error message
                    },
                    timer_trigger: {
                        type: jspsych.ParameterType.INT,
                        default: null,
                    },
                },
            },
            selection_prompt: {
                type: jspsych.ParameterType.COMPLEX,
                default: {},
                nested: {
                    prompts: {
                        type: jspsych.ParameterType.STRING,
                        array: true,
                        default: [],
                    },
                    selection_prompt: {
                        type: jspsych.ParameterType.STRING,
                        default: "Select one of these prompts:",
                    },
                    message_trigger: {
                        type: jspsych.ParameterType.INT,
                        default: 99999999999999999999999, // silencing error message
                    },
                    timer_trigger: {
                        type: jspsych.ParameterType.INT,
                        default: null,
                    },
                },
            },
        },
    };
    /**
     * **chat**
     *
     * Chat interface for running experiments using LLMs
     *
     * @author Victor Zhang and Niranjan Baskaran
     * @see {@link https://github.com/jspsych/jspsych-contrib/packages/plugin-chat/README.md}}
     */
    class ChatPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            this.initializeTrialVariables(trial);
            // var botTitle = trial.bot_name
            //   ? `<div class="bot-title">
            //   <h1 class="bot-title-text">` +
            //     trial.bot_name +
            //     `</h1>
            // </div>`
            //   : "";
            var html = `<div class="chat-page">` +
                // botTitle +
                `<div class="chat-container">
        <div class="chat-box" id="chat-box"></div>

        <div class="chat-fields"> 
          <textarea type="text" id="user-input" placeholder="` +
                trial.chat_field_placeholder +
                `"></textarea>
          <button id="send-btn">Send</button>
          <button id="continue-btn" style="display: none;">Continue</button>
        </div>
      </div>
    </div>`;
            display_element.innerHTML = html;
            document.body.style.backgroundColor = "#9c9ad05c";
            const chatBox = display_element.querySelector("#chat-box");
            const userInput = display_element.querySelector("#user-input");
            const sendButton = display_element.querySelector("#send-btn");
            const continueButton = display_element.querySelector("#continue-btn");
            var keyPressLog = [];
            // Setting up Trial Logic
            // Function to handle logic of sending user message, and data collection
            const sendMessage = () => __awaiter(this, void 0, void 0, function* () {
                const message = userInput.value.trim();
                this.addMessage("user", message, chatBox, (keyPressLog = keyPressLog));
                keyPressLog = [];
                userInput.value = "";
                // prompt chaining or simple requests
                if (message !== "" && this.selection_prompt && this.checkCondition("selection_prompt"))
                    yield this.selectionPrompt(message, chatBox);
                else if (message !== "" && this.prompt_chain && this.checkCondition("prompt_chain")) {
                    yield this.chainPrompts(message, chatBox);
                }
                else if (message !== "") {
                    yield this.updateAndProcessGPT(chatBox);
                }
                chatBox.scrollTop = chatBox.scrollHeight;
                // inc messages and check researcher prompts
                this.messages_sent += 1;
                this.checkResearcherPrompts(chatBox, continueButton);
            });
            // Event listener for send button click
            sendButton.addEventListener("click", function (event) {
                if (userInput.value.trim() != "") {
                    sendMessage();
                }
            });
            // Event listener for Enter key press
            userInput.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    if (!event.shiftKey) {
                        event.preventDefault(); // Prevent default behavior of adding new line
                        sendMessage();
                    }
                }
            });
            // Event listener for all keypresses on userInput
            userInput.addEventListener("keydown", function (event) {
                keyPressLog.push(event.key);
            });
            continueButton.addEventListener("click", () => {
                this.jsPsych.finishTrial({
                    logs: this.chatLog.getChatLogs(),
                });
            });
            // Setting up Trial
            this.checkResearcherPrompts(chatBox, continueButton);
        }
        // includes error checking to minimize error checking later
        initializeTrialVariables(trial) {
            this.timer_start = performance.now();
            this.chatLog = new ChatLog();
            this.messages_sent = 0;
            this.ai_model = trial.ai_model;
            // this.chatLog.updateConversationLog(trial.ai_prompt, "system");
            this.chatLog.setPrompt(trial.ai_prompt); // sets researcher prompts and removes any that can't trigger
            this.researcher_prompts = trial.additional_prompts
                ? trial.additional_prompts.filter((researcher_prompt) => {
                    if (researcher_prompt["message_trigger"] === null &&
                        researcher_prompt["timer_trigger"] === null) {
                        console.error("Missing required property in researcher prompt:", researcher_prompt);
                        return false;
                    }
                    return true;
                })
                : [];
            // sets continue button and removes any that can't trigger
            const continue_button = trial.continue_button;
            if (continue_button["message_trigger"] === null && continue_button["timer_trigger"] === null) {
                console.error("Missing required trigger property in continue prompt, will never display");
            }
            else {
                continue_button["role"] = "continue";
                this.researcher_prompts.push(continue_button);
            }
            // sets prompt chain and removes any that can't trigger
            if (trial.prompt_chain &&
                trial.prompt_chain["message_trigger"] === null &&
                trial.prompt_chain["timer_trigger"] === null) {
                console.error("Missing required trigger property in prompt_chain, will never trigger");
            }
            else {
                this.prompt_chain = trial.prompt_chain;
            }
            if (trial.selection_prompt &&
                trial.selection_prompt["message_trigger"] === null &&
                trial.selection_prompt["timer_trigger"] === null) {
                console.error("Missing required trigger property in selection_prompt, will never trigger");
            }
            else {
                this.selection_prompt = trial.selection_prompt;
            }
        }
        // Call to backend, newMessage is the document item to print (optional because when chaining don't want them to display)
        fetchGPT(messages, chatBox, newMessage) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    var response;
                    if (window.location.href.includes("127.0.0.1")) {
                        // local chat vs hosting
                        response = yield fetch("http://localhost:3000/api/chat", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ messages, ai_model: this.ai_model }), // Corrected JSON structure
                        });
                    }
                    else {
                        response = yield fetch("/api/chat", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ messages, ai_model: this.ai_model }), // Corrected JSON structure
                        });
                    }
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const runner = ChatCompletionStream.fromReadableStream(response.body);
                    if (newMessage) {
                        // prints to screen if specified, otherwise only fetch
                        runner.on("content", (delta, snapshot) => {
                            newMessage.innerHTML += delta.replace(/\n/g, "<br>");
                            chatBox.scrollTop = chatBox.scrollHeight;
                        });
                    }
                    yield runner.finalChatCompletion(); // waits before returning the actual content
                    return runner["messages"][0]["content"];
                }
                catch (error) {
                    console.error("Error fetching GPT data:", error);
                    throw error; // Rethrow the error after logging it
                }
            });
        }
        // Handles updates to system with the prompt and to the screen
        addMessage(role, message, chatBox, keyPressLog) {
            const newMessage = document.createElement("div");
            // Handles logic of updating prompts and error checking
            switch (role) {
                case "chatbot": // writing to screen handled caller function
                    this.chatLog.updateConversationLog(message, "assistant");
                    return;
                case "user":
                    this.chatLog.updateConversationLog(message, "user", keyPressLog);
                    break;
                case "chatbot-message": // set by researcher, needs be seperate case because doesn't update prompts
                    role = "chatbot";
                    this.chatLog.logMessage(message, role);
                    break;
                case "system-prompt": // set by researcher
                    this.chatLog.logMessage(message, role);
                    break;
                case "chatbot-prompt": // logging already handled by "cleanSystem"
                    role = "system-prompt";
                    break;
                default:
                    console.error("Incorrect role");
                    return;
            }
            newMessage.className = role + "-message";
            newMessage.innerHTML = "";
            chatBox.appendChild(newMessage);
            newMessage.innerHTML = message.replace(/\n/g, "<br>");
            chatBox.scrollTop = chatBox.scrollHeight;
        }
        // updates and processes to the screen, workflow for one message (can be used in the process of workflow for mulitple messages)
        updateAndProcessGPT(chatBox, prompt) {
            return __awaiter(this, void 0, void 0, function* () {
                const newMessage = document.createElement("div");
                newMessage.className = "chatbot" + "-message";
                newMessage.innerHTML = "";
                chatBox.appendChild(newMessage);
                try {
                    var response = undefined;
                    if (prompt) {
                        // allows to pass in non defined prompts
                        response = yield this.fetchGPT(prompt, chatBox, newMessage);
                        console.log(prompt);
                    }
                    else {
                        // special case when wanting to prompt with own thing
                        response = yield this.fetchGPT(this.chatLog.getPrompt(), chatBox, newMessage);
                        console.log(this.chatLog.getPrompt());
                    }
                    chatBox.scrollTop = chatBox.scrollHeight;
                    this.addMessage("chatbot", response, chatBox); // saves to prompt
                    return response;
                }
                catch (error) {
                    newMessage.innerHTML = "error fetching bot response";
                    return "error fetching response";
                }
            });
        }
        // logic for triggering logic
        checkResearcherPrompts(chatBox, continueButton) {
            this.researcher_prompts = this.researcher_prompts.filter((researcher_prompt) => {
                const message_trigger = researcher_prompt["message_trigger"];
                const timer_trigger = researcher_prompt["timer_trigger"];
                const time_elapsed = performance.now() - this.timer_start; // could instead keep subtracting from time_elapsed
                if ((message_trigger !== null && this.messages_sent >= message_trigger) ||
                    (timer_trigger !== null && time_elapsed >= timer_trigger)) {
                    // Checking with prompt to trigger
                    switch (researcher_prompt["role"]) {
                        case "chatbot-message": // case is needed because of chatbot updating prompt
                        case "system-prompt": // want these cases to have the same functionality
                            this.addMessage(researcher_prompt["role"], researcher_prompt["message"], chatBox);
                            break;
                        case "chatbot-prompt": // checks messages, updates prompt and prints sytem message if exists
                            const prompt = researcher_prompt["prompt"];
                            const message = researcher_prompt["message"];
                            if (prompt !== null && typeof prompt === "string") {
                                this.chatLog.cleanSystem(prompt, message);
                            }
                            else
                                console.error(researcher_prompt, "is missing prompt field or it isn't in the correct format");
                            if (message !== null && typeof prompt === "string" && message !== "") {
                                this.addMessage(researcher_prompt["role"], message, chatBox);
                            }
                            break;
                        case "continue": // displays continue button, error checking that pipelining is working
                            if (!continueButton) {
                                console.error("No continue button to display");
                                return false;
                            }
                            continueButton.style.display = "block";
                            // implement check here
                            this.addMessage("system-prompt", researcher_prompt["message"], chatBox);
                            break;
                        default:
                            console.error("Incorrect role for prompting");
                    }
                    return false; // Remove this item from the array
                }
                return true; // Keep this item in the array
            });
        }
        // checking whether chain prompts can trigger
        checkCondition(name) {
            const time_elapsed = performance.now() - this.timer_start; // could instead keep subtracting from time_elapsed
            const message_trigger = this[name]["message_trigger"];
            const timer_trigger = this[name]["timer_trigger"];
            if ((message_trigger !== null && this.messages_sent >= message_trigger) ||
                (timer_trigger !== null && time_elapsed >= timer_trigger))
                return true;
            else
                return false;
        }
        // triggering prompts in chain and prompting/logging logic
        chainPrompts(message, chatBox) {
            return __awaiter(this, void 0, void 0, function* () {
                const cleaned_prompt = this.chatLog.cleanConversation();
                const logChain = [];
                for (let i = 0; i < this.prompt_chain["prompts"].length; i++) {
                    const chain_prompt_system = this.prompt_chain["prompts"][i];
                    const temp_prompt = [
                        ...cleaned_prompt,
                        {
                            role: "system",
                            content: chain_prompt_system,
                        },
                        {
                            role: "user",
                            content: message,
                        },
                    ];
                    logChain.push({
                        role: `chain-system-${i}`,
                        content: chain_prompt_system,
                    }, {
                        role: `link-response-${i}`,
                        content: message,
                    });
                    if (i === this.prompt_chain["prompts"].length - 1) {
                        message = yield this.updateAndProcessGPT(chatBox, temp_prompt);
                        logChain.push({ role: "assistant", content: message });
                    }
                    else {
                        message = yield this.fetchGPT(temp_prompt, chatBox); // Ensure to await if fetchGPT is asynchronous
                    }
                }
                this.chatLog.logMessage(logChain, "chain-prompt");
            });
        }
        selectionPrompt(message, chatBox) {
            return __awaiter(this, void 0, void 0, function* () {
                const cleaned_prompt = this.chatLog.cleanConversation(); // maybe be able to refactor and cleanSystem()
                var bot_responses = "";
                for (var i = 0; i < this.selection_prompt["prompts"].length; i++) {
                    const input_prompt = this.selection_prompt["prompts"][i];
                    const combined_prompt = [
                        ...cleaned_prompt,
                        { role: "system", content: input_prompt },
                        { role: "user", content: message },
                    ];
                    console.log("individual_prompt:", combined_prompt);
                    const response = yield this.fetchGPT(combined_prompt, chatBox);
                    bot_responses = bot_responses + "(" + i + ") " + response + "\n\n";
                }
                const system_user = this.selection_prompt["selection_prompt"] +
                    "Task: You should select one of the three possible responses that would best achieve your goal with the intention of outputting it to the user" +
                    "What you should output: You should output the choice that you have selected, but without any indication that this was a numbered choice. Do not tell the user that you selected a certain response. The user should not know that there were choices." +
                    " User message: `" +
                    message +
                    "`";
                this.chatLog.logMessage([
                    { role: "prompt-selection", content: system_user },
                    { role: "content-choices/chatbot-answers", content: bot_responses },
                ], "selection_prompt");
                const prompt_select = [
                    ...cleaned_prompt,
                    { role: "system", content: system_user },
                    { role: "user", content: bot_responses },
                ];
                yield this.updateAndProcessGPT(chatBox, prompt_select);
            });
        }
    }
    ChatPlugin.info = info;

    return ChatPlugin;

})(jsPsychModule);
//# sourceMappingURL=index.browser.js.map
