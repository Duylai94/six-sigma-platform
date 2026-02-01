import { CourseDataset } from "../types/course";

export const courseDatasets: CourseDataset[] = [
    // MILLING / MANUFACTURING DATA
    {
        name: "gage_rr_variable.csv",
        csv_url: "/datasets/gage_rr_variable.csv",
        description_en: "Measurement System Analysis data for 10 parts, 3 operators, 3 replicates. Variable data (measurements).",
        use_in_modules: ["mod_measure_msa_01", "mod_measure_msa_02"],
    },
    {
        name: "gage_rr_attribute.csv",
        csv_url: "/datasets/gage_rr_attribute.csv",
        description_en: "Attribute agreement analysis data (Pass/Fail) for 50 items with master standard.",
        use_in_modules: ["mod_measure_msa_03"],
    },
    {
        name: "process_samples.csv",
        csv_url: "/datasets/process_samples.csv",
        description_en: "100 continuous measurements of widget diameter for normality testing and descriptive stats.",
        use_in_modules: ["mod_measure_stats_01", "mod_measure_capability_01"],
    },
    {
        name: "cycle_times.csv",
        csv_url: "/datasets/cycle_times.csv",
        description_en: "Process cycle times (n=200) for capability analysis (Cp/Cpk) and histogram visualization.",
        use_in_modules: ["mod_measure_capability_02", "mod_analyze_hypothesis_01"],
    },
    {
        name: "defects_by_shift.csv",
        csv_url: "/datasets/defects_by_shift.csv",
        description_en: "Count of defects per shift over 30 days. Useful for Poisson distribution and hypothesis testing.",
        use_in_modules: ["mod_measure_stats_02", "mod_analyze_anova_01"],
    },

    // COMPARISON & HYPOTHESIS TESTING
    {
        name: "before_after.csv",
        csv_url: "/datasets/before_after.csv",
        description_en: "Paired data showing process output before and after an improvement. Use for Paired T-Test.",
        use_in_modules: ["mod_analyze_hypothesis_02"],
    },
    {
        name: "two_groups.csv",
        csv_url: "/datasets/two_groups.csv",
        description_en: "Independent samples from Machine A vs Machine B. Use for 2-Sample T-Test.",
        use_in_modules: ["mod_analyze_hypothesis_03"],
    },
    {
        name: "three_groups.csv",
        csv_url: "/datasets/three_groups.csv",
        description_en: "Output from 3 different suppliers. Use for One-Way ANOVA.",
        use_in_modules: ["mod_analyze_anova_01"],
    },
    {
        name: "categorical_data.csv",
        csv_url: "/datasets/categorical_data.csv",
        description_en: "Contingency table data (Defect Type vs Region). Use for Chi-Square Test.",
        use_in_modules: ["mod_analyze_chisquare_01"],
    },

    // REGRESSION & CORRELATION
    {
        name: "correlation_data.csv",
        csv_url: "/datasets/correlation_data.csv",
        description_en: "Variables X1 (Temp), X2 (Pressure), and Y (Strength). Use for Scatter plots and Correlation.",
        use_in_modules: ["mod_analyze_regression_01"],
    },
    {
        name: "time_series.csv",
        csv_url: "/datasets/time_series.csv",
        description_en: "Daily production yield over 90 days. Use for Trend Analysis and Run Charts.",
        use_in_modules: ["mod_analyze_graphs_01"],
    },
    {
        name: "response_surface.csv",
        csv_url: "/datasets/response_surface.csv",
        description_en: "Experimental data for Response Surface Methodology (RSM) analysis.",
        use_in_modules: ["mod_improve_doe_03"],
    },

    // DESIGN OF EXPERIMENTS (DOE)
    {
        name: "doe_2x2.csv",
        csv_url: "/datasets/doe_2x2.csv",
        description_en: "Results from a 2-factor, 2-level full factorial design (4 runs x 3 replicates).",
        use_in_modules: ["mod_improve_doe_01"],
    },
    {
        name: "doe_2x2x2.csv",
        csv_url: "/datasets/doe_2x2x2.csv",
        description_en: "Results from a 3-factor, 2-level full factorial design. Main effects and Interaction plots.",
        use_in_modules: ["mod_improve_doe_02"],
    },

    // CONTROL CHARTS (SPC)
    {
        name: "control_chart_xbar_r.csv",
        csv_url: "/datasets/control_chart_xbar_r.csv",
        description_en: "Subgrouped data (size=5) for Xbar-R Chart construction.",
        use_in_modules: ["mod_control_spc_01"],
    },
    {
        name: "control_chart_individuals.csv",
        csv_url: "/datasets/control_chart_individuals.csv",
        description_en: "Individual measurements moving range data for I-MR Chart.",
        use_in_modules: ["mod_control_spc_02"],
    },
    {
        name: "control_chart_p.csv",
        csv_url: "/datasets/control_chart_p.csv",
        description_en: "Attribute data (defective count vs sample size) for P-Chart.",
        use_in_modules: ["mod_control_spc_03"],
    },
    {
        name: "control_chart_u.csv",
        csv_url: "/datasets/control_chart_u.csv",
        description_en: "Defects per unit data with variable sample size for U-Chart.",
        use_in_modules: ["mod_control_spc_04"],
    },
    {
        name: "nelson_rules_demo.csv",
        csv_url: "/datasets/nelson_rules_demo.csv",
        description_en: "Simulated process data containing specific out-of-control patterns (Shift, Trend, Oscillation).",
        use_in_modules: ["mod_control_spc_05"],
    },

    // LEAN & OTHERS
    {
        name: "value_stream.csv",
        csv_url: "/datasets/value_stream.csv",
        description_en: "Process steps with Cycle Time, Wait Time, and Value Added status for VSM.",
        use_in_modules: ["mod_lean_vsm_01"],
    },
    {
        name: "waste_analysis.csv",
        csv_url: "/datasets/waste_analysis.csv",
        description_en: "Frequency and cost of 8 wastes observed in a process.",
        use_in_modules: ["mod_lean_waste_01"],
    },
    {
        name: "pilot_before_after.csv",
        csv_url: "/datasets/pilot_before_after.csv",
        description_en: "Results from a pilot run comparison.",
        use_in_modules: ["mod_improve_pilot_01"],
    },
    {
        name: "brainstorm_votes.csv",
        csv_url: "/datasets/brainstorm_votes.csv",
        description_en: "Voting data from a brainstorming session for multi-voting simulation.",
        use_in_modules: ["mod_improve_solutions_01"],
    },
    {
        name: "call_center_times.csv",
        csv_url: "/datasets/call_center_times.csv",
        description_en: "Call duration data, non-normal distribution demo.",
        use_in_modules: ["mod_measure_capability_03"],
    },
    {
        name: "pizzas_delivery.csv",
        csv_url: "/datasets/pizzas_delivery.csv",
        description_en: "Delivery times vs promised times. Capability analysis scenario.",
        use_in_modules: ["mod_project_examples_01"],
    }
];
