# URSI-LLM-Convo-Bot

This repository contains the code, data, and analysis for an undergraduate cognitive science research project aimed at measuring and reducing American reluctance to engage in conversations about controversial topics. The project combines a multi-agent LLM architecture with advanced statistical profiling to foster open-minded, productive dialogue on divisive topics.

### Live Project Output & Data Analysis
**[View the Representative Sample Willingness Survey Report](https://jodeleeuw.github.io/URSI-LLM-Convo-Bot/analysis/rep_sample_analysis.html)**

This live report details the quantitative foundation of the project's measurement scale, including the dimensionality reduction and hierarchical clustering used to map the latent psychological factors preventing productive discourse.

---

### Phase 1: Multi-Agent LLM Architecture & Initial Piloting
The project began with the development of a conversational AI system designed to test if LLMs could increase a user's willingness to engage in respectful discussions. 
* **Response Election Architecture:** The system uses a 5-agent LLM evaluation harness to manage conversational routing. 
* **Targeted Generation:** Four distinct LLM agents generate parallel responses to the user's input. Three agents are strictly grounded in persuasive dialogue literature (using counterarguments, reflective questioning, and perspective-sharing), while a fourth operates with minimal constraints to maintain conversational flexibility.
* **Programmatic Evaluation:** A fifth LLM agent evaluates the four generated responses in real-time, selecting the optimal output most likely to increase the user's willingness to engage.
* **Initial Piloting:** This architecture was initially deployed and iteratively tested via small-scale Prolific pilots using jsPsych.

### Phase 2: Empirical Problem Definition & Statistical Profiling
During initial testing, it became evident that we were not properly capturing the information from participants that would allow us to measure the system's effectiveness. A more robust measurement instrument was required.
* **Instrument Development:** A novel 25-item psychological inventory was researched, developed, and tested to accurately quantify "conversation reluctance" and its underlying sociocultural factors.
* **Representative Deployment:** The instrument was deployed to a US-representative sample (N = 284) via Prolific to assess baseline willingness to engage. [View the participant survey here](https://jodeleeuw.github.io/URSI-LLM-Convo-Bot/experiment/index.html)
* **Dimensionality Reduction:** Exploratory Factor Analysis (EFA) and Principal Component Analysis (PCA) were used to distill 25 overlapping anxieties into four core latent factors: Social & Reputation Consequences, Perceived Futility & Emotional Cost, Unpreparedness for Complex Topics, and Personal Vulnerability & Identity Threat.
* **Hierarchical Clustering:** The US population sample was segmented into four distinct behavioral profiles based on their specific conversational anxieties, mapping the complex, localized nature of conversational reluctance.

### Phase 3: Dynamic Personalization Integration
Moving forward, the empirical findings from the representative survey may be fed directly back into the LLM architecture to close the loop on the system's flexibility. 
* **Targeted Prompting:** The system could then dynamically inject a user's pre-surveyed conversational anxieties directly into the generation prompts, training the model to map conversational strategies to  specific concern profiles.

### Repository Structure
* **/analysis:** Contains the R scripts, raw data, and deployed HTML report (`rep_sample_analysis.html`) documenting the statistical profiling and cluster analysis.
* **/experiment:** Contains the iterative JavaScript and jsPsych experimental deployments.
* **/backend:** Contains the API routing logic for the multi-agent system.

### Research Context
Jacqueline Adelmann and Ian Ho, along with Niranjan Baskaran and Victor Zhang, first architected and evaluated this project during an Undergraduate Research Summer Institute (URSI) Fellowship at Vassar College under the advisement of Professor Joshua de Leeuw and Professor Stephen Flusberg. At the summer's conclusion, Adelmann carried on with the project under Professor de Leeuw's advisement.