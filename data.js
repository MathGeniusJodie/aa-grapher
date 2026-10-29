const FIELDS = [
 {
  "id": "f0",
  "name": "aa3d_elo",
  "pretty_name": "Aa3d ELO",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f1",
  "name": "aa3d_elo_interval_lower",
  "pretty_name": "Aa3d ELO Interval Lower",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f2",
  "name": "aa3d_elo_interval_upper",
  "pretty_name": "Aa3d ELO Interval Upper",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f3",
  "name": "aime25",
  "pretty_name": "Aime25",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f4",
  "name": "analyst_agent",
  "pretty_name": "Analyst Agent",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f5",
  "name": "apex_agents",
  "pretty_name": "Apex Agents",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f6",
  "name": "automation_bench",
  "pretty_name": "Automation Bench",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f7",
  "name": "briefcase_breakdown_analytical_quality_elo",
  "pretty_name": "Briefcase Breakdown Analytical Quality ELO",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f8",
  "name": "briefcase_breakdown_analytical_quality_lower95ci",
  "pretty_name": "Briefcase Breakdown Analytical Quality Lower95ci",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f9",
  "name": "briefcase_breakdown_analytical_quality_upper95ci",
  "pretty_name": "Briefcase Breakdown Analytical Quality Upper95ci",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f10",
  "name": "briefcase_breakdown_overall_elo",
  "pretty_name": "Briefcase Breakdown Overall ELO",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f11",
  "name": "briefcase_breakdown_overall_lower95ci",
  "pretty_name": "Briefcase Breakdown Overall Lower95ci",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f12",
  "name": "briefcase_breakdown_overall_upper95ci",
  "pretty_name": "Briefcase Breakdown Overall Upper95ci",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f13",
  "name": "briefcase_breakdown_presentation_elo",
  "pretty_name": "Briefcase Breakdown Presentation ELO",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f14",
  "name": "briefcase_breakdown_presentation_lower95ci",
  "pretty_name": "Briefcase Breakdown Presentation Lower95ci",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f15",
  "name": "briefcase_breakdown_presentation_upper95ci",
  "pretty_name": "Briefcase Breakdown Presentation Upper95ci",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f16",
  "name": "briefcase_breakdown_rubric_pass_rate",
  "pretty_name": "Briefcase Breakdown Rubric Pass Rate",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f17",
  "name": "briefcase_elo",
  "pretty_name": "Briefcase ELO",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f18",
  "name": "briefcase_total_cost",
  "pretty_name": "Briefcase Total Cost",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f19",
  "name": "cache_hit_discount_percent",
  "pretty_name": "Cache Hit Discount Percent",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f20",
  "name": "cache_hit_price",
  "pretty_name": "Cache Hit Price",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f21",
  "name": "cache_write_price",
  "pretty_name": "Cache Write Price",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f22",
  "name": "canonical_intelligence_index_token_count_answer",
  "pretty_name": "Canonical Intelligence Index Token Count Answer",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f23",
  "name": "canonical_intelligence_index_token_count_input",
  "pretty_name": "Canonical Intelligence Index Token Count Input",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f24",
  "name": "canonical_intelligence_index_token_count_output",
  "pretty_name": "Canonical Intelligence Index Token Count Output",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f25",
  "name": "canonical_intelligence_index_token_count_reasoning",
  "pretty_name": "Canonical Intelligence Index Token Count Reasoning",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f26",
  "name": "capabilities_economics",
  "pretty_name": "Capabilities Economics",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f27",
  "name": "capabilities_engineering",
  "pretty_name": "Capabilities Engineering",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f28",
  "name": "capabilities_finance_and_accounting",
  "pretty_name": "Capabilities Finance And Accounting",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f29",
  "name": "capabilities_healthcare_and_medical",
  "pretty_name": "Capabilities Healthcare And Medical",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f30",
  "name": "capabilities_legal",
  "pretty_name": "Capabilities Legal",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f31",
  "name": "capabilities_strategy_and_ops",
  "pretty_name": "Capabilities Strategy And Ops",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f32",
  "name": "code2video_elo",
  "pretty_name": "Code2video ELO",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f33",
  "name": "code2video_elo_interval_lower",
  "pretty_name": "Code2video ELO Interval Lower",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f34",
  "name": "code2video_elo_interval_upper",
  "pretty_name": "Code2video ELO Interval Upper",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f35",
  "name": "context_window_tokens",
  "pretty_name": "Context Window Tokens",
  "direction": "max",
  "scale": "log"
 },
 {
  "id": "f36",
  "name": "cost_per_task",
  "pretty_name": "Cost Per Task",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f37",
  "name": "critpt",
  "pretty_name": "Critpt",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f38",
  "name": "critpt_agentic_hard",
  "pretty_name": "Critpt Agentic Hard",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f39",
  "name": "cursorbench",
  "pretty_name": "CursorBench",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f40",
  "name": "deepswe_cost_per_task",
  "pretty_name": "DeepSWE Cost Per Task",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f41",
  "name": "deepswe_pass_at_1",
  "pretty_name": "DeepSWE Pass At 1",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f42",
  "name": "deepswe_pass_at_4",
  "pretty_name": "DeepSWE Pass At 4",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f43",
  "name": "eci",
  "pretty_name": "ECI (Epoch)",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f44",
  "name": "effort_level",
  "pretty_name": "Effort Level",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f45",
  "name": "enterprise_ops_gym",
  "pretty_name": "Enterprise Ops Gym",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f46",
  "name": "eqbench3_analytical",
  "pretty_name": "EQB3 Analytical",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f47",
  "name": "eqbench3_boundary_setting",
  "pretty_name": "EQB3 Boundary Setting",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f48",
  "name": "eqbench3_challenging",
  "pretty_name": "EQB3 Challenging",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f49",
  "name": "eqbench3_compliant",
  "pretty_name": "EQB3 Compliant",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f50",
  "name": "eqbench3_conversational",
  "pretty_name": "EQB3 Conversational",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f51",
  "name": "eqbench3_demonstrated_empathy",
  "pretty_name": "EQB3 Demonstrated Empathy",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f52",
  "name": "eqbench3_depth_of_insight",
  "pretty_name": "EQB3 Depth Of Insight",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f53",
  "name": "eqbench3_emotional_reasoning",
  "pretty_name": "EQB3 Emotional Reasoning",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f54",
  "name": "eqbench3_humanlike",
  "pretty_name": "EQB3 Humanlike",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f55",
  "name": "eqbench3_message_tailoring",
  "pretty_name": "EQB3 Message Tailoring",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f56",
  "name": "eqbench3_moralising",
  "pretty_name": "EQB3 Moralising",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f57",
  "name": "eqbench3_pragmatic_ei",
  "pretty_name": "EQB3 Pragmatic Ei",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f58",
  "name": "eqbench3_reactive",
  "pretty_name": "EQB3 Reactive",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f59",
  "name": "eqbench3_safety_conscious",
  "pretty_name": "EQB3 Safety Conscious",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f60",
  "name": "eqbench3_social_dexterity",
  "pretty_name": "EQB3 Social Dexterity",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f61",
  "name": "eqbench3_validating",
  "pretty_name": "EQB3 Validating",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f62",
  "name": "eqbench3_warmth",
  "pretty_name": "EQB3 Warmth",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f63",
  "name": "eqbench4_analytical",
  "pretty_name": "EQB4 Analytical",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f64",
  "name": "eqbench4_attunement",
  "pretty_name": "EQB4 Attunement",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f65",
  "name": "eqbench4_authenticity",
  "pretty_name": "EQB4 Authenticity",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f66",
  "name": "eqbench4_bond_and_rapport",
  "pretty_name": "EQB4 Bond And Rapport",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f67",
  "name": "eqbench4_challenge_propensity",
  "pretty_name": "EQB4 Challenge Propensity",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f68",
  "name": "eqbench4_directive_advice_orientation",
  "pretty_name": "EQB4 Directive Advice Orientation",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f69",
  "name": "eqbench4_elo",
  "pretty_name": "EQB4 ELO",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f70",
  "name": "eqbench4_emotion_management",
  "pretty_name": "EQB4 Emotion Management",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f71",
  "name": "eqbench4_emotion_sensemaking",
  "pretty_name": "EQB4 Emotion Sensemaking",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f72",
  "name": "eqbench4_escalation_containment",
  "pretty_name": "EQB4 Escalation Containment",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f73",
  "name": "eqbench4_interpretive_boldness",
  "pretty_name": "EQB4 Interpretive Boldness",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f74",
  "name": "eqbench4_meeting_prefs_and_needs",
  "pretty_name": "EQB4 Meeting Prefs And Needs",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f75",
  "name": "eqbench4_naturalness_authenticity",
  "pretty_name": "EQB4 Naturalness Authenticity",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f76",
  "name": "eqbench4_validation_propensity",
  "pretty_name": "EQB4 Validation Propensity",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f77",
  "name": "eqbench4_yielding",
  "pretty_name": "EQB4 Yielding",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f78",
  "name": "frontier_code",
  "pretty_name": "Frontier Code",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f79",
  "name": "frontier_code20",
  "pretty_name": "Frontier Code20",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f80",
  "name": "frontiermath_tier4_v2",
  "pretty_name": "FrontierMath Tier 4 (v2)",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f81",
  "name": "gdp_pdf_all_pass",
  "pretty_name": "Gdp Pdf All Pass",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f82",
  "name": "gdpval",
  "pretty_name": "Gdpval",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f83",
  "name": "gdpval_interval_lower",
  "pretty_name": "Gdpval Interval Lower",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f84",
  "name": "gdpval_interval_upper",
  "pretty_name": "Gdpval Interval Upper",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f85",
  "name": "gpqa",
  "pretty_name": "Gpqa",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f86",
  "name": "harvey_lab",
  "pretty_name": "Harvey Lab",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f87",
  "name": "healthbench",
  "pretty_name": "Healthbench",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f88",
  "name": "healthbench_professional",
  "pretty_name": "Healthbench Professional",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f89",
  "name": "hle",
  "pretty_name": "Hle",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f90",
  "name": "hle_diamond",
  "pretty_name": "Hle Diamond",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f91",
  "name": "host_model_count",
  "pretty_name": "Host Model Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f92",
  "name": "ifbench",
  "pretty_name": "Ifbench",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f93",
  "name": "inference_parameters_active_billions",
  "pretty_name": "Inference Parameters Active Billions",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f94",
  "name": "intelligence_index",
  "pretty_name": "Intelligence Index",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f95",
  "name": "intelligence_index_cost_answer",
  "pretty_name": "Intelligence Index Cost Answer",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f96",
  "name": "intelligence_index_cost_cache_read",
  "pretty_name": "Intelligence Index Cost Cache Read",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f97",
  "name": "intelligence_index_cost_cache_write",
  "pretty_name": "Intelligence Index Cost Cache Write",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f98",
  "name": "intelligence_index_cost_input",
  "pretty_name": "Intelligence Index Cost Input",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f99",
  "name": "intelligence_index_cost_non_cache_input",
  "pretty_name": "Intelligence Index Cost Non Cache Input",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f100",
  "name": "intelligence_index_cost_output",
  "pretty_name": "Intelligence Index Cost Output",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f101",
  "name": "intelligence_index_cost_per_task_cost_answer",
  "pretty_name": "Intelligence Index Cost Per Task Cost Answer",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f102",
  "name": "intelligence_index_cost_per_task_cost_cache_read",
  "pretty_name": "Intelligence Index Cost Per Task Cost Cache Read",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f103",
  "name": "intelligence_index_cost_per_task_cost_cache_write",
  "pretty_name": "Intelligence Index Cost Per Task Cost Cache Write",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f104",
  "name": "intelligence_index_cost_per_task_cost_input",
  "pretty_name": "Intelligence Index Cost Per Task Cost Input",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f105",
  "name": "intelligence_index_cost_per_task_cost_non_cache_input",
  "pretty_name": "Intelligence Index Cost Per Task Cost Non Cache Input",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f106",
  "name": "intelligence_index_cost_per_task_cost_output",
  "pretty_name": "Intelligence Index Cost Per Task Cost Output",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f107",
  "name": "intelligence_index_cost_per_task_cost_reasoning",
  "pretty_name": "Intelligence Index Cost Per Task Cost Reasoning",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f108",
  "name": "intelligence_index_cost_per_task_cost_total",
  "pretty_name": "Intelligence Index Cost Per Task Cost Total",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f109",
  "name": "intelligence_index_cost_reasoning",
  "pretty_name": "Intelligence Index Cost Reasoning",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f110",
  "name": "intelligence_index_cost_total",
  "pretty_name": "Intelligence Index Cost Total",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f111",
  "name": "intelligence_index_output_tokens_per_task_answer",
  "pretty_name": "Intelligence Index Output Tokens Per Task Answer",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f112",
  "name": "intelligence_index_output_tokens_per_task_output",
  "pretty_name": "Intelligence Index Output Tokens Per Task Output",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f113",
  "name": "intelligence_index_output_tokens_per_task_reasoning",
  "pretty_name": "Intelligence Index Output Tokens Per Task Reasoning",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f114",
  "name": "intelligence_index_time_per_task",
  "pretty_name": "Intelligence Index Time Per Task",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f115",
  "name": "itbench_sre",
  "pretty_name": "Itbench Sre",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f116",
  "name": "lcr",
  "pretty_name": "Lcr",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f117",
  "name": "livebench_AMPS_Hard",
  "pretty_name": "LiveBench Amps Hard",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f118",
  "name": "livebench_agentic_coding",
  "pretty_name": "LiveBench Agentic Coding",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f119",
  "name": "livebench_code_completion",
  "pretty_name": "LiveBench Code Completion",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f120",
  "name": "livebench_code_generation",
  "pretty_name": "LiveBench Code Generation",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f121",
  "name": "livebench_coding",
  "pretty_name": "LiveBench Coding",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f122",
  "name": "livebench_connections",
  "pretty_name": "LiveBench Connections",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f123",
  "name": "livebench_consecutive_events",
  "pretty_name": "LiveBench Consecutive Events",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f124",
  "name": "livebench_data_analysis",
  "pretty_name": "LiveBench Data Analysis",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f125",
  "name": "livebench_if",
  "pretty_name": "LiveBench If",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f126",
  "name": "livebench_integrals_with_game",
  "pretty_name": "LiveBench Integrals With Game",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f127",
  "name": "livebench_javascript",
  "pretty_name": "LiveBench Javascript",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f128",
  "name": "livebench_language",
  "pretty_name": "LiveBench Language",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f129",
  "name": "livebench_logic_with_navigation",
  "pretty_name": "LiveBench Logic With Navigation",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f130",
  "name": "livebench_math_comp",
  "pretty_name": "LiveBench Math Comp",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f131",
  "name": "livebench_mathematics",
  "pretty_name": "LiveBench Mathematics",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f132",
  "name": "livebench_olympiad",
  "pretty_name": "LiveBench Olympiad",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f133",
  "name": "livebench_paraphrase",
  "pretty_name": "LiveBench Paraphrase",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f134",
  "name": "livebench_plot_unscrambling",
  "pretty_name": "LiveBench Plot Unscrambling",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f135",
  "name": "livebench_python",
  "pretty_name": "LiveBench Python",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f136",
  "name": "livebench_reasoning",
  "pretty_name": "LiveBench Reasoning",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f137",
  "name": "livebench_simplify",
  "pretty_name": "LiveBench Simplify",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f138",
  "name": "livebench_spatial",
  "pretty_name": "LiveBench Spatial",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f139",
  "name": "livebench_story_generation",
  "pretty_name": "LiveBench Story Generation",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f140",
  "name": "livebench_summarize",
  "pretty_name": "LiveBench Summarize",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f141",
  "name": "livebench_tablejoin",
  "pretty_name": "LiveBench Tablejoin",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f142",
  "name": "livebench_tablereformat",
  "pretty_name": "LiveBench Tablereformat",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f143",
  "name": "livebench_theory_of_mind",
  "pretty_name": "LiveBench Theory Of Mind",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f144",
  "name": "livebench_typescript",
  "pretty_name": "LiveBench Typescript",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f145",
  "name": "livebench_typos",
  "pretty_name": "LiveBench Typos",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f146",
  "name": "livebench_zebra_puzzle",
  "pretty_name": "LiveBench Zebra Puzzle",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f147",
  "name": "livecodebench",
  "pretty_name": "Livecodebench",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f148",
  "name": "median_end_to_end_response_time",
  "pretty_name": "Median End To End Response Time",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f149",
  "name": "median_output_speed",
  "pretty_name": "Median Output Speed",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f150",
  "name": "median_reasoning_time",
  "pretty_name": "Median Reasoning Time",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f151",
  "name": "median_time_to_first_answer_token",
  "pretty_name": "Median Time To First Answer Token",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f152",
  "name": "median_time_to_first_chunk",
  "pretty_name": "Median Time To First Chunk",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f153",
  "name": "mlcr_overall",
  "pretty_name": "Mlcr Overall",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f154",
  "name": "mmmu_pro",
  "pretty_name": "Mmmu Pro",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f155",
  "name": "num_hosts",
  "pretty_name": "Num Hosts",
  "direction": "max",
  "scale": "log"
 },
 {
  "id": "f156",
  "name": "omniscience",
  "pretty_name": "Omniscience",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f157",
  "name": "omniscience_accuracy",
  "pretty_name": "Omniscience Accuracy",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f158",
  "name": "omniscience_hallucination_rate",
  "pretty_name": "Omniscience Hallucination Rate",
  "direction": "min",
  "scale": "linear"
 },
 {
  "id": "f159",
  "name": "omniscience_non_hallucination",
  "pretty_name": "Omniscience Non Hallucination",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f160",
  "name": "openness_model_availability",
  "pretty_name": "Openness Model Availability",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f161",
  "name": "openness_openness_index",
  "pretty_name": "Openness Openness Index",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f162",
  "name": "openness_transparency_methodology",
  "pretty_name": "Openness Transparency Methodology",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f163",
  "name": "openness_transparency_post_training_data",
  "pretty_name": "Openness Transparency Post Training Data",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f164",
  "name": "openness_transparency_pre_training_data",
  "pretty_name": "Openness Transparency Pre Training Data",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f165",
  "name": "output_speed_variance_median",
  "pretty_name": "Output Speed Variance Median",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f166",
  "name": "output_speed_variance_p05",
  "pretty_name": "Output Speed Variance P05",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f167",
  "name": "output_speed_variance_p95",
  "pretty_name": "Output Speed Variance P95",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f168",
  "name": "output_speed_variance_q25",
  "pretty_name": "Output Speed Variance Q25",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f169",
  "name": "output_speed_variance_q75",
  "pretty_name": "Output Speed Variance Q75",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f170",
  "name": "parameters",
  "pretty_name": "Parameters",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f171",
  "name": "percentile05_output_speed",
  "pretty_name": "Percentile05 Output Speed",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f172",
  "name": "percentile05_time_to_first_chunk",
  "pretty_name": "Percentile05 Time To First Chunk",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f173",
  "name": "percentile95_output_speed",
  "pretty_name": "Percentile95 Output Speed",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f174",
  "name": "percentile95_time_to_first_chunk",
  "pretty_name": "Percentile95 Time To First Chunk",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f175",
  "name": "performance_by_prompt_type_hundred_k_median_end_to_end_response_time",
  "pretty_name": "Performance By Prompt Type Hundred K Median End To End Response Time",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f176",
  "name": "performance_by_prompt_type_hundred_k_median_output_speed",
  "pretty_name": "Performance By Prompt Type Hundred K Median Output Speed",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f177",
  "name": "performance_by_prompt_type_hundred_k_median_time_to_first_answer_token",
  "pretty_name": "Performance By Prompt Type Hundred K Median Time To First Answer Token",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f178",
  "name": "performance_by_prompt_type_hundred_k_median_time_to_first_chunk",
  "pretty_name": "Performance By Prompt Type Hundred K Median Time To First Chunk",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f179",
  "name": "performance_by_prompt_type_long_median_end_to_end_response_time",
  "pretty_name": "Performance By Prompt Type Long Median End To End Response Time",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f180",
  "name": "performance_by_prompt_type_long_median_output_speed",
  "pretty_name": "Performance By Prompt Type Long Median Output Speed",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f181",
  "name": "performance_by_prompt_type_long_median_time_to_first_answer_token",
  "pretty_name": "Performance By Prompt Type Long Median Time To First Answer Token",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f182",
  "name": "performance_by_prompt_type_long_median_time_to_first_chunk",
  "pretty_name": "Performance By Prompt Type Long Median Time To First Chunk",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f183",
  "name": "performance_by_prompt_type_medium_median_end_to_end_response_time",
  "pretty_name": "Performance By Prompt Type Medium Median End To End Response Time",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f184",
  "name": "performance_by_prompt_type_medium_median_output_speed",
  "pretty_name": "Performance By Prompt Type Medium Median Output Speed",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f185",
  "name": "performance_by_prompt_type_medium_median_time_to_first_answer_token",
  "pretty_name": "Performance By Prompt Type Medium Median Time To First Answer Token",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f186",
  "name": "performance_by_prompt_type_medium_median_time_to_first_chunk",
  "pretty_name": "Performance By Prompt Type Medium Median Time To First Chunk",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f187",
  "name": "performance_by_prompt_type_medium_parallel_median_end_to_end_response_time",
  "pretty_name": "Performance By Prompt Type Medium Parallel Median End To End Response Time",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f188",
  "name": "performance_by_prompt_type_medium_parallel_median_output_speed",
  "pretty_name": "Performance By Prompt Type Medium Parallel Median Output Speed",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f189",
  "name": "performance_by_prompt_type_medium_parallel_median_time_to_first_answer_token",
  "pretty_name": "Performance By Prompt Type Medium Parallel Median Time To First Answer Token",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f190",
  "name": "performance_by_prompt_type_medium_parallel_median_time_to_first_chunk",
  "pretty_name": "Performance By Prompt Type Medium Parallel Median Time To First Chunk",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f191",
  "name": "personality_bench_index_intervals_conviction_lower",
  "pretty_name": "Personality Bench Index Intervals Conviction Lower",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f192",
  "name": "personality_bench_index_intervals_conviction_upper",
  "pretty_name": "Personality Bench Index Intervals Conviction Upper",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f193",
  "name": "personality_bench_index_intervals_expressiveness_lower",
  "pretty_name": "Personality Bench Index Intervals Expressiveness Lower",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f194",
  "name": "personality_bench_index_intervals_expressiveness_upper",
  "pretty_name": "Personality Bench Index Intervals Expressiveness Upper",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f195",
  "name": "personality_bench_index_intervals_imagination_lower",
  "pretty_name": "Personality Bench Index Intervals Imagination Lower",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f196",
  "name": "personality_bench_index_intervals_imagination_upper",
  "pretty_name": "Personality Bench Index Intervals Imagination Upper",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f197",
  "name": "personality_bench_index_intervals_informativeness_lower",
  "pretty_name": "Personality Bench Index Intervals Informativeness Lower",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f198",
  "name": "personality_bench_index_intervals_informativeness_upper",
  "pretty_name": "Personality Bench Index Intervals Informativeness Upper",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f199",
  "name": "personality_bench_index_intervals_organization_lower",
  "pretty_name": "Personality Bench Index Intervals Organization Lower",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f200",
  "name": "personality_bench_index_intervals_organization_upper",
  "pretty_name": "Personality Bench Index Intervals Organization Upper",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f201",
  "name": "personality_bench_index_intervals_slop_lower",
  "pretty_name": "Personality Bench Index Intervals Slop Lower",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f202",
  "name": "personality_bench_index_intervals_slop_upper",
  "pretty_name": "Personality Bench Index Intervals Slop Upper",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f203",
  "name": "personality_bench_index_intervals_transparency_lower",
  "pretty_name": "Personality Bench Index Intervals Transparency Lower",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f204",
  "name": "personality_bench_index_intervals_transparency_upper",
  "pretty_name": "Personality Bench Index Intervals Transparency Upper",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f205",
  "name": "personality_bench_index_intervals_warmth_lower",
  "pretty_name": "Personality Bench Index Intervals Warmth Lower",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f206",
  "name": "personality_bench_index_intervals_warmth_upper",
  "pretty_name": "Personality Bench Index Intervals Warmth Upper",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f207",
  "name": "personality_bench_index_scores_conviction",
  "pretty_name": "Personality Bench Index Scores Conviction",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f208",
  "name": "personality_bench_index_scores_expressiveness",
  "pretty_name": "Personality Bench Index Scores Expressiveness",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f209",
  "name": "personality_bench_index_scores_imagination",
  "pretty_name": "Personality Bench Index Scores Imagination",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f210",
  "name": "personality_bench_index_scores_informativeness",
  "pretty_name": "Personality Bench Index Scores Informativeness",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f211",
  "name": "personality_bench_index_scores_organization",
  "pretty_name": "Personality Bench Index Scores Organization",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f212",
  "name": "personality_bench_index_scores_slop",
  "pretty_name": "Personality Bench Index Scores Slop",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f213",
  "name": "personality_bench_index_scores_transparency",
  "pretty_name": "Personality Bench Index Scores Transparency",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f214",
  "name": "personality_bench_index_scores_warmth",
  "pretty_name": "Personality Bench Index Scores Warmth",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f215",
  "name": "personality_bench_means_acronym_count",
  "pretty_name": "Personality Bench Means Acronym Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f216",
  "name": "personality_bench_means_avg_sentence_length",
  "pretty_name": "Personality Bench Means Avg Sentence Length",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f217",
  "name": "personality_bench_means_bold_count",
  "pretty_name": "Personality Bench Means Bold Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f218",
  "name": "personality_bench_means_char_count",
  "pretty_name": "Personality Bench Means Char Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f219",
  "name": "personality_bench_means_colon_count",
  "pretty_name": "Personality Bench Means Colon Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f220",
  "name": "personality_bench_means_contraction_count",
  "pretty_name": "Personality Bench Means Contraction Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f221",
  "name": "personality_bench_means_ellipsis_count",
  "pretty_name": "Personality Bench Means Ellipsis Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f222",
  "name": "personality_bench_means_em_dash_count",
  "pretty_name": "Personality Bench Means Em Dash Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f223",
  "name": "personality_bench_means_emoji_count",
  "pretty_name": "Personality Bench Means Emoji Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f224",
  "name": "personality_bench_means_ends_with_question",
  "pretty_name": "Personality Bench Means Ends With Question",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f225",
  "name": "personality_bench_means_exclamation_count",
  "pretty_name": "Personality Bench Means Exclamation Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f226",
  "name": "personality_bench_means_heading_count",
  "pretty_name": "Personality Bench Means Heading Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f227",
  "name": "personality_bench_means_italics_count",
  "pretty_name": "Personality Bench Means Italics Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f228",
  "name": "personality_bench_means_list_count",
  "pretty_name": "Personality Bench Means List Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f229",
  "name": "personality_bench_means_paragraph_count",
  "pretty_name": "Personality Bench Means Paragraph Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f230",
  "name": "personality_bench_means_parenthetical_count",
  "pretty_name": "Personality Bench Means Parenthetical Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f231",
  "name": "personality_bench_means_question_count",
  "pretty_name": "Personality Bench Means Question Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f232",
  "name": "personality_bench_means_quote_count",
  "pretty_name": "Personality Bench Means Quote Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f233",
  "name": "personality_bench_means_sentence_count",
  "pretty_name": "Personality Bench Means Sentence Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f234",
  "name": "personality_bench_means_table_count",
  "pretty_name": "Personality Bench Means Table Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f235",
  "name": "personality_bench_means_word_count",
  "pretty_name": "Personality Bench Means Word Count",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f236",
  "name": "personality_bench_scores_admits_uncertainty",
  "pretty_name": "Personality Bench Scores Admits Uncertainty",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f237",
  "name": "personality_bench_scores_answer_first",
  "pretty_name": "Personality Bench Scores Answer First",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f238",
  "name": "personality_bench_scores_confident",
  "pretty_name": "Personality Bench Scores Confident",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f239",
  "name": "personality_bench_scores_constructively_pushes_back",
  "pretty_name": "Personality Bench Scores Constructively Pushes Back",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f240",
  "name": "personality_bench_scores_creative",
  "pretty_name": "Personality Bench Scores Creative",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f241",
  "name": "personality_bench_scores_direct",
  "pretty_name": "Personality Bench Scores Direct",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f242",
  "name": "personality_bench_scores_disclaims_with_assumptions",
  "pretty_name": "Personality Bench Scores Disclaims With Assumptions",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f243",
  "name": "personality_bench_scores_eloquent",
  "pretty_name": "Personality Bench Scores Eloquent",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f244",
  "name": "personality_bench_scores_emotionally_intelligent",
  "pretty_name": "Personality Bench Scores Emotionally Intelligent",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f245",
  "name": "personality_bench_scores_evidence_based",
  "pretty_name": "Personality Bench Scores Evidence Based",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f246",
  "name": "personality_bench_scores_flags_nuances",
  "pretty_name": "Personality Bench Scores Flags Nuances",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f247",
  "name": "personality_bench_scores_friendly",
  "pretty_name": "Personality Bench Scores Friendly",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f248",
  "name": "personality_bench_scores_humorous",
  "pretty_name": "Personality Bench Scores Humorous",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f249",
  "name": "personality_bench_scores_information_dense",
  "pretty_name": "Personality Bench Scores Information Dense",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f250",
  "name": "personality_bench_scores_lexically_varied",
  "pretty_name": "Personality Bench Scores Lexically Varied",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f251",
  "name": "personality_bench_scores_literate",
  "pretty_name": "Personality Bench Scores Literate",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f252",
  "name": "personality_bench_scores_metaphorical",
  "pretty_name": "Personality Bench Scores Metaphorical",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f253",
  "name": "personality_bench_scores_natural_sounding",
  "pretty_name": "Personality Bench Scores Natural Sounding",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f254",
  "name": "personality_bench_scores_open_ended",
  "pretty_name": "Personality Bench Scores Open Ended",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f255",
  "name": "personality_bench_scores_opinionated",
  "pretty_name": "Personality Bench Scores Opinionated",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f256",
  "name": "personality_bench_scores_pragmatic",
  "pretty_name": "Personality Bench Scores Pragmatic",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f257",
  "name": "personality_bench_scores_provides_actionable_guidance",
  "pretty_name": "Personality Bench Scores Provides Actionable Guidance",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f258",
  "name": "personality_bench_scores_resource_specific",
  "pretty_name": "Personality Bench Scores Resource Specific",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f259",
  "name": "personality_bench_scores_scannable",
  "pretty_name": "Personality Bench Scores Scannable",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f260",
  "name": "personality_bench_scores_sincere",
  "pretty_name": "Personality Bench Scores Sincere",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f261",
  "name": "personality_bench_scores_slop",
  "pretty_name": "Personality Bench Scores Slop",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f262",
  "name": "personality_bench_scores_structured",
  "pretty_name": "Personality Bench Scores Structured",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f263",
  "name": "personality_bench_scores_summarizes_bottom_line",
  "pretty_name": "Personality Bench Scores Summarizes Bottom Line",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f264",
  "name": "personality_bench_scores_sycophantic",
  "pretty_name": "Personality Bench Scores Sycophantic",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f265",
  "name": "personality_bench_scores_truthful",
  "pretty_name": "Personality Bench Scores Truthful",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f266",
  "name": "price_1m_blended",
  "pretty_name": "Price 1m Blended",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f267",
  "name": "price_1m_blended0_to100_to1",
  "pretty_name": "Price 1m Blended0 To100 To1",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f268",
  "name": "price_1m_blended0_to1_to1",
  "pretty_name": "Price 1m Blended0 To1 To1",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f269",
  "name": "price_1m_blended0_to3_to1",
  "pretty_name": "Price 1m Blended0 To3 To1",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f270",
  "name": "price_1m_blended100_to1_to1",
  "pretty_name": "Price 1m Blended100 To1 To1",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f271",
  "name": "price_1m_input_tokens",
  "pretty_name": "Price 1m Input Tokens",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f272",
  "name": "price_1m_output_tokens",
  "pretty_name": "Price 1m Output Tokens",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f273",
  "name": "price_per1k1mp_images",
  "pretty_name": "Price Per1k1mp Images",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f274",
  "name": "quartile25_output_speed",
  "pretty_name": "Quartile25 Output Speed",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f275",
  "name": "quartile25_time_to_first_chunk",
  "pretty_name": "Quartile25 Time To First Chunk",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f276",
  "name": "quartile75_output_speed",
  "pretty_name": "Quartile75 Output Speed",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f277",
  "name": "quartile75_time_to_first_chunk",
  "pretty_name": "Quartile75 Time To First Chunk",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f278",
  "name": "reasoning_tokens",
  "pretty_name": "Reasoning Tokens",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f279",
  "name": "scicode",
  "pretty_name": "Scicode",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f280",
  "name": "simplebench",
  "pretty_name": "SimpleBench",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f281",
  "name": "swe_eci",
  "pretty_name": "SWE-ECI (Epoch)",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f282",
  "name": "tau2",
  "pretty_name": "Tau2",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f283",
  "name": "tau_banking",
  "pretty_name": "Tau Banking",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f284",
  "name": "terminal_bench21",
  "pretty_name": "Terminal Bench21",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f285",
  "name": "terminal_bench40",
  "pretty_name": "Terminal Bench40",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f286",
  "name": "terminal_bench_science",
  "pretty_name": "Terminal Bench Science",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f287",
  "name": "terminalbench_hard",
  "pretty_name": "Terminalbench Hard",
  "direction": "max",
  "scale": "linear"
 },
 {
  "id": "f288",
  "name": "time_to_first_chunk_variance_median",
  "pretty_name": "Time To First Chunk Variance Median",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f289",
  "name": "time_to_first_chunk_variance_p05",
  "pretty_name": "Time To First Chunk Variance P05",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f290",
  "name": "time_to_first_chunk_variance_p95",
  "pretty_name": "Time To First Chunk Variance P95",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f291",
  "name": "time_to_first_chunk_variance_q25",
  "pretty_name": "Time To First Chunk Variance Q25",
  "direction": "min",
  "scale": "log"
 },
 {
  "id": "f292",
  "name": "time_to_first_chunk_variance_q75",
  "pretty_name": "Time To First Chunk Variance Q75",
  "direction": "min",
  "scale": "log"
 }
];
const DATA = [{"name": "Qwen3.5 Omni Plus", "creator": "Alibaba", "open_weights": false, "f35": 256000, "f37": 0.005633, "f85": 0.8263, "f89": 0.1487, "f92": 0.5116, "f116": 0.6367, "f148": 6.896, "f149": 103.5, "f151": 2.063, "f152": 2.063, "f154": 0.7052, "f155": 1, "f171": 35.85, "f172": 1.954, "f173": 180.9, "f174": 2.279, "f271": 0.4, "f272": 4.8, "f274": 90.14, "f275": 2.015, "f276": 135.3, "f277": 2.138, "f282": 0.883, "f287": 0.2121}, {"name": "Qwen3.5 122B A10B (non-reasoning) (FP4)", "creator": "Alibaba", "open_weights": true, "f35": 262100, "f37": 0.008571, "f82": 716.3, "f85": 0.8273, "f89": 0.1594, "f92": 0.5082, "f116": 0.6133, "f148": 7.883, "f149": 99.99, "f151": 1.731, "f152": 1.731, "f154": 0.7029, "f155": 2, "f171": 63.1, "f172": 1.536, "f173": 120.3, "f174": 2.27, "f271": 0.29, "f272": 2.4, "f274": 86.03, "f275": 1.639, "f276": 109, "f277": 1.832, "f282": 0.845, "f283": 0.1031, "f284": 0.4719, "f287": 0.2955}, {"name": "Gemma 4 12B (non-reasoning)", "creator": "Google", "open_weights": true, "f35": 262144, "f37": 0, "f46": 16.27, "f47": 11.12, "f48": 9.08, "f49": 13.23, "f50": 10.12, "f51": 14.19, "f52": 13.98, "f53": 13.6, "f54": 11.54, "f55": 12.04, "f56": 8.65, "f57": 13.54, "f58": 10.15, "f59": 11.35, "f60": 12.65, "f61": 15.42, "f62": 14.46, "f85": 0.6606, "f89": 0.06348, "f92": 0.4517, "f116": 0.35, "f148": 6.394, "f149": 118.8, "f151": 2.185, "f152": 2.185, "f154": 0.6197, "f155": 1, "f171": 79.58, "f172": 1.833, "f173": 139.8, "f174": 2.775, "f271": 0.1, "f272": 0.3, "f274": 104.8, "f275": 2.051, "f276": 134.6, "f277": 2.28, "f282": 0.3187, "f287": 0.1136}, {"name": "Claude Sonnet 5.5 (medium with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.5491, "f7": 1640, "f8": 1622, "f9": 1659, "f10": 1438, "f11": 1428, "f12": 1449, "f13": 1298, "f14": 1279, "f15": 1316, "f16": 0.5091, "f17": 1438, "f18": 126.7, "f19": 0.95, "f20": 0.1, "f21": 2.5, "f22": 17997621, "f23": 1662829802, "f24": 29396702, "f25": 11399081, "f26": 40.61, "f27": 36.79, "f28": 40.69, "f29": 40.16, "f30": 38.76, "f31": 46.67, "f35": 1000000, "f36": 0.7807, "f37": 0.1686, "f38": 0.285, "f44": 30, "f78": 0.2931, "f79": 0.1097, "f81": 0.202, "f82": 1329, "f83": 1308, "f84": 1350, "f89": 0.3981, "f90": 0.238, "f91": 1, "f94": 30.32, "f95": 180, "f96": 156.8, "f97": 190.7, "f98": 385.2, "f99": 37.73, "f100": 294, "f101": 0.1638, "f102": 0.2502, "f103": 0.2051, "f104": 0.4732, "f105": 0.01784, "f106": 0.3075, "f107": 0.1437, "f108": 0.7807, "f109": 114, "f110": 679.2, "f111": 16380, "f112": 30750, "f113": 14370, "f114": 191.3, "f116": 0.7633, "f148": 7.303, "f149": 104.7, "f151": 2.529, "f152": 2.529, "f153": 0.1778, "f155": 1, "f156": 18.63, "f157": 0.4577, "f158": 0.5003, "f159": 0.4997, "f165": 104.7, "f166": 83.04, "f167": 142.9, "f168": 89.4, "f169": 121.3, "f171": 83.04, "f172": 0.9416, "f173": 142.9, "f174": 11.61, "f175": 31.52, "f176": 147, "f177": 28.12, "f178": 28.12, "f179": 7.303, "f180": 104.7, "f181": 2.529, "f182": 2.529, "f183": 5.899, "f184": 100, "f185": 0.8989, "f186": 0.8989, "f187": 7.131, "f188": 81.88, "f189": 1.024, "f190": 1.024, "f191": 31, "f192": 48, "f193": 34, "f194": 48, "f195": 73, "f196": 79, "f197": 38, "f198": 52, "f199": 34, "f200": 55, "f201": 26, "f202": 32, "f203": 81, "f204": 87, "f205": 57, "f206": 68, "f207": 38.12, "f208": 38.12, "f209": 75.25, "f210": 48.02, "f211": 45.55, "f212": 28.23, "f213": 82.67, "f214": 60.4, "f215": 1.949, "f216": 14.08, "f217": 10.48, "f218": 2583, "f219": 5.446, "f220": 9.084, "f221": 0.06667, "f222": 0.001111, "f223": 0.02333, "f224": 0.1711, "f225": 0.05778, "f226": 1.63, "f227": 1.004, "f228": 3.139, "f229": 8.064, "f230": 3.563, "f231": 2.198, "f232": 6.53, "f233": 30.63, "f234": 0.05333, "f235": 404.3, "f236": 890.5, "f237": 875.4, "f238": 957, "f239": 1187, "f240": 911.6, "f241": 773.9, "f242": 934.2, "f243": 959.5, "f244": 899.2, "f245": 1064, "f246": 1037, "f247": 1115, "f248": 945.7, "f249": 1340, "f250": 993, "f251": 870.9, "f252": 1274, "f253": 834.9, "f254": 1176, "f255": 953.4, "f256": 901.6, "f257": 1068, "f258": 1466, "f259": 1190, "f260": 980.2, "f261": 1194, "f262": 867.5, "f263": 897.7, "f264": 937.8, "f265": 814.7, "f266": 1.47, "f267": 2.079, "f268": 6, "f269": 4, "f270": 0.2157, "f271": 2, "f272": 10, "f274": 89.4, "f275": 1.416, "f276": 121.3, "f277": 4.823, "f278": 0, "f279": 0.5289, "f285": 0.298, "f286": 0.1619, "f288": 2.529, "f289": 0.9416, "f290": 11.61, "f291": 1.416, "f292": 4.823}, {"name": "Claude Fable 5.1 (low with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.5224, "f7": 1702, "f8": 1688, "f9": 1717, "f10": 1479, "f11": 1471, "f12": 1487, "f13": 1284, "f14": 1270, "f15": 1299, "f16": 0.5535, "f17": 1479, "f18": 611.6, "f19": 0.975, "f20": 0.25, "f21": 12.5, "f22": 22797388, "f23": 2962132883, "f24": 36344445, "f25": 13547057, "f26": 49.18, "f27": 45.37, "f28": 47.72, "f29": 44.06, "f30": 46.69, "f31": 51.13, "f35": 1000000, "f36": 4.471, "f37": 0.2771, "f38": 0.475, "f44": 20, "f79": 0.2284, "f81": 0.28, "f82": 1478, "f83": 1460, "f84": 1496, "f85": 0.8808, "f89": 0.4889, "f90": 0.374, "f91": 1, "f94": 38.48, "f95": 1129, "f96": 734, "f97": 1181, "f98": 2099, "f99": 183.9, "f100": 1787, "f101": 1.104, "f102": 1.207, "f103": 1.317, "f104": 2.611, "f105": 0.08763, "f106": 1.86, "f107": 0.7564, "f108": 4.471, "f109": 658, "f110": 3886, "f111": 22300, "f112": 37840, "f113": 15530, "f114": 427.3, "f116": 0.8233, "f148": 11.17, "f149": 54.77, "f151": 2.042, "f152": 2.042, "f153": 0.1833, "f155": 1, "f156": 33.93, "f157": 0.5867, "f158": 0.5984, "f159": 0.4016, "f165": 54.77, "f166": 38.7, "f167": 73.11, "f168": 47.28, "f169": 67.47, "f171": 38.7, "f172": 0.4454, "f173": 73.11, "f174": 18.44, "f175": 37.84, "f176": 74.47, "f177": 31.13, "f178": 31.13, "f179": 11.17, "f180": 54.77, "f181": 2.042, "f182": 2.042, "f183": 10.11, "f184": 53.47, "f185": 0.7592, "f186": 0.7592, "f187": 13.14, "f188": 40.19, "f189": 0.7039, "f190": 0.7039, "f266": 7.175, "f267": 10.4, "f268": 30, "f269": 20, "f270": 0.8333, "f271": 10, "f272": 50, "f274": 47.28, "f275": 0.8634, "f276": 67.47, "f277": 3.11, "f278": 0, "f279": 0.5671, "f283": 0.3897, "f284": 0.8502, "f285": 0.404, "f286": 0.2143, "f288": 2.042, "f289": 0.4454, "f290": 18.44, "f291": 0.8634, "f292": 3.11}, {"name": "Apodex 1.1", "creator": "Apodex", "open_weights": false, "f5": 0.3119, "f6": 0.282, "f17": 1013, "f20": 0.03, "f35": 256000, "f37": 0.04571, "f81": 0.112, "f82": 1196, "f85": 0.8636, "f89": 0.3406, "f90": 0.116, "f116": 0.7933, "f154": 0.7919, "f155": 1, "f271": 0.3, "f272": 3, "f279": 0.4549, "f283": 0.2515, "f284": 0.6966, "f285": 0}, {"name": "GPT-6.1 Sol (xhigh)", "creator": "OpenAI", "open_weights": false, "f6": 0.6657, "f7": 1691, "f8": 1673, "f9": 1710, "f10": 1502, "f11": 1491, "f12": 1513, "f13": 1429, "f14": 1411, "f15": 1448, "f16": 0.5162, "f17": 1502, "f18": 94.51, "f19": 0.95, "f20": 0.1, "f21": 2.5, "f22": 14197462, "f23": 1612933044, "f24": 33286283, "f25": 19088821, "f26": 55.72, "f27": 57.3, "f28": 55.21, "f29": 50.76, "f30": 53.68, "f31": 57.24, "f35": 1000000, "f36": 0.764, "f37": 0.3171, "f38": 0.68, "f44": 50, "f78": 0.4629, "f79": 0.3852, "f81": 0.318, "f82": 1553, "f83": 1532, "f84": 1574, "f89": 0.5264, "f90": 0.558, "f91": 1, "f94": 52.31, "f95": 142, "f96": 151.6, "f97": 198.9, "f98": 384.8, "f99": 34.3, "f100": 332.9, "f101": 0.1471, "f102": 0.2265, "f103": 0.2187, "f104": 0.4616, "f105": 0.0163, "f106": 0.3024, "f107": 0.1553, "f108": 0.764, "f109": 190.9, "f110": 717.7, "f111": 14710, "f112": 30240, "f113": 15530, "f114": 454.4, "f116": 0.7967, "f148": 104.5, "f149": 65.74, "f151": 96.89, "f152": 96.89, "f153": 0.3556, "f154": 0.8509, "f155": 1, "f156": 42.37, "f157": 0.6107, "f158": 0.4803, "f159": 0.5197, "f165": 65.74, "f166": 35.87, "f167": 98.03, "f168": 48.04, "f169": 80.5, "f171": 35.87, "f172": 28.15, "f173": 98.03, "f174": 254.3, "f175": 250.6, "f176": 67.81, "f177": 243.3, "f178": 243.3, "f179": 104.5, "f180": 65.74, "f181": 96.89, "f182": 96.89, "f183": 78.74, "f184": 72.71, "f185": 71.86, "f186": 71.86, "f187": 72.58, "f188": 44.83, "f189": 61.43, "f190": 61.43, "f266": 1.47, "f267": 2.079, "f268": 6, "f269": 4, "f270": 0.2157, "f271": 2, "f272": 10, "f274": 48.04, "f275": 41.34, "f276": 80.5, "f277": 143.9, "f278": 0, "f279": 0.5567, "f285": 0.5404, "f286": 0.5048, "f288": 96.89, "f289": 28.15, "f290": 254.3, "f291": 41.34, "f292": 143.9}, {"name": "Gemini 3.5 Flash-Lite AI Studio", "creator": "Google", "open_weights": false, "f6": 0.2501, "f7": 391.9, "f8": 374.7, "f9": 407.1, "f10": 651.1, "f11": 642.1, "f12": 659, "f13": 764.2, "f14": 748.3, "f15": 780.3, "f16": 0.1485, "f17": 651.1, "f18": 14.03, "f19": 0.9, "f20": 0.03, "f22": 11399425, "f23": 3883820509, "f24": 43842106, "f25": 32442681, "f26": 21.59, "f27": 21.22, "f28": 23.31, "f29": 20.49, "f30": 23.91, "f31": 20.73, "f35": 1000000, "f36": 0.6929, "f37": 0, "f38": 0.035, "f43": 144.9, "f44": 40, "f45": 0.4235, "f79": 0.0603, "f80": 0, "f81": 0.136, "f82": 994.9, "f83": 973, "f84": 1017, "f85": 0.8384, "f86": 0, "f89": 0.1881, "f90": 0.099, "f91": 4, "f94": 11.66, "f95": 28.5, "f96": 68.99, "f97": 472.3, "f98": 544.2, "f99": 2.89, "f100": 109.6, "f101": 0.03384, "f102": 0.07921, "f103": 0.5366, "f104": 0.6172, "f105": 0.001328, "f106": 0.07575, "f107": 0.04191, "f108": 0.6929, "f109": 81.11, "f110": 653.8, "f111": 13540, "f112": 30300, "f113": 16770, "f114": 69.95, "f116": 0.76, "f148": 7.749, "f149": 439.2, "f151": 6.61, "f152": 6.61, "f153": 0.1056, "f154": 0.7902, "f155": 1, "f156": 6.867, "f157": 0.265, "f158": 0.2671, "f159": 0.7329, "f165": 439.2, "f166": 304.2, "f167": 530, "f168": 332.4, "f169": 494.5, "f171": 304.2, "f172": 4.419, "f173": 530, "f174": 11.43, "f175": 16.56, "f176": 399.4, "f177": 15.31, "f178": 15.31, "f179": 7.749, "f180": 439.2, "f181": 6.61, "f182": 6.61, "f183": 6.229, "f184": 409.4, "f185": 5.007, "f186": 5.007, "f187": 6.636, "f188": 310.2, "f189": 5.024, "f190": 5.024, "f266": 0.331, "f267": 0.3218, "f268": 1.4, "f269": 0.85, "f270": 0.05686, "f271": 0.3, "f272": 2.5, "f274": 332.4, "f275": 5.819, "f276": 494.5, "f277": 8.203, "f278": 0, "f279": 0.4132, "f283": 0.1753, "f284": 0.5356, "f285": 0.0101, "f286": 0, "f288": 6.61, "f289": 4.419, "f290": 11.43, "f291": 5.819, "f292": 8.203}, {"name": "Step 5 Preview", "creator": "StepFun", "open_weights": true, "f0": 853.5, "f1": 821, "f2": 886, "f4": 0.35, "f5": 0.3798, "f6": 0.5096, "f7": 1538, "f8": 1518, "f9": 1559, "f10": 1423, "f11": 1413, "f12": 1433, "f13": 1390, "f14": 1372, "f15": 1409, "f16": 0.4778, "f17": 1423, "f18": 215.9, "f19": 0.9, "f20": 0.1, "f22": 27358058, "f23": 9797530489, "f24": 128708466, "f25": 101350408, "f26": 40.15, "f27": 36.97, "f28": 40.53, "f29": 39.91, "f30": 38.62, "f31": 44.24, "f32": 820.6, "f33": 799, "f34": 842, "f35": 1000000, "f36": 2.345, "f37": 0.2086, "f38": 0.325, "f45": 0.4718, "f78": 0.3843, "f79": 0.12, "f81": 0.148, "f82": 1594, "f83": 1571, "f84": 1618, "f89": 0.4648, "f90": 0.243, "f91": 1, "f93": 27, "f94": 28.53, "f95": 73.87, "f96": 944.6, "f97": 342.2, "f98": 1296, "f99": 9.452, "f100": 347.5, "f101": 0.09063, "f102": 1.534, "f103": 0.5007, "f104": 2.039, "f105": 0.004383, "f106": 0.3064, "f107": 0.2157, "f108": 2.345, "f109": 273.6, "f110": 1644, "f111": 33570, "f112": 113500, "f113": 79910, "f114": 592.3, "f115": 0.5556, "f116": 0.8833, "f148": 15.89, "f149": 166.7, "f150": 12, "f151": 12.89, "f152": 0.8884, "f153": 0.1833, "f154": 0.7636, "f155": 1, "f156": 16.43, "f157": 0.3637, "f158": 0.3133, "f159": 0.6867, "f160": 4, "f161": 33.33, "f162": 2, "f163": 0, "f164": 0, "f165": 166.7, "f166": 102.8, "f167": 195.7, "f168": 151.9, "f169": 181.6, "f170": 600, "f171": 102.8, "f172": 0.5974, "f173": 195.7, "f174": 2.049, "f175": 18.31, "f176": 174.3, "f177": 15.44, "f178": 3.966, "f179": 15.89, "f180": 166.7, "f181": 12.89, "f182": 0.8884, "f183": 14.86, "f184": 176.6, "f185": 12.02, "f186": 0.7004, "f187": 16.43, "f188": 158.7, "f189": 13.28, "f190": 0.677, "f191": 50, "f192": 62, "f193": 23, "f194": 34, "f195": 26, "f196": 42, "f197": 38, "f198": 52, "f199": 79, "f200": 97, "f201": 45, "f202": 47, "f203": 30, "f204": 45, "f205": 28, "f206": 42, "f207": 55.45, "f208": 30.7, "f209": 38.12, "f210": 45.55, "f211": 95.05, "f212": 45.55, "f213": 35.65, "f214": 35.65, "f215": 2.867, "f216": 14.28, "f217": 11.54, "f218": 3227, "f219": 9.004, "f220": 7.981, "f221": 0.1178, "f222": 2.709, "f223": 0.01, "f224": 0.01778, "f225": 0.02444, "f226": 4.284, "f227": 1.826, "f228": 3.418, "f229": 12.13, "f230": 2.714, "f231": 2.824, "f232": 10.93, "f233": 37.51, "f234": 0.1578, "f235": 490.4, "f236": 647, "f237": 993.5, "f238": 1168, "f239": 1113, "f240": 998.1, "f241": 735.6, "f242": 724.8, "f243": 1081, "f244": 924.3, "f245": 805.1, "f246": 928.8, "f247": 912.5, "f248": 847.1, "f249": 1077, "f250": 718.9, "f251": 795.1, "f252": 1170, "f253": 827.8, "f254": 643.4, "f255": 1094, "f256": 969.9, "f257": 1397, "f258": 1572, "f259": 1250, "f260": 656.6, "f261": 1467, "f262": 855.2, "f263": 1083, "f264": 978.4, "f265": 545.9, "f266": 0.54, "f267": 1.017, "f268": 1.85, "f269": 1.425, "f270": 0.1343, "f271": 1, "f272": 2.7, "f274": 151.9, "f275": 0.7939, "f276": 181.6, "f277": 0.9741, "f278": 2000, "f279": 0.5891, "f285": 0.3333, "f286": 0.02381, "f288": 0.8884, "f289": 0.5974, "f290": 2.049, "f291": 0.7939, "f292": 0.9741}, {"name": "Qwen3 Omni 30B A3B", "creator": "Alibaba", "open_weights": true, "f3": 0.5233, "f35": 65536, "f37": 0, "f85": 0.6202, "f89": 0.04634, "f92": 0.3116, "f116": 0, "f147": 0.4222, "f148": 7.048, "f149": 96.67, "f151": 1.876, "f152": 1.876, "f154": 0.5549, "f155": 1, "f171": 86.07, "f172": 1.687, "f173": 98.1, "f174": 2.423, "f271": 0.25, "f272": 0.97, "f274": 94.55, "f275": 1.784, "f276": 97.6, "f277": 1.954, "f282": 0.1637, "f287": 0.01515}, {"name": "GPT-6.1 Terra (non-reasoning)", "creator": "OpenAI", "open_weights": false, "f6": 0.5104, "f7": 1275, "f8": 1256, "f9": 1295, "f10": 1227, "f11": 1217, "f12": 1238, "f13": 1244, "f14": 1227, "f15": 1263, "f16": 0.3646, "f17": 1227, "f18": 20.04, "f19": 0.95, "f20": 0.05, "f21": 1.25, "f22": 9964792, "f23": 1497203428, "f24": 9964792, "f25": 0, "f26": 32.53, "f27": 32.7, "f28": 33.53, "f30": 28.17, "f31": 39.98, "f35": 1000000, "f36": 0.2259, "f37": 0.04857, "f38": 0.325, "f78": 0.4103, "f79": 0.3335, "f81": 0.232, "f82": 1287, "f83": 1264, "f84": 1309, "f89": 0.2113, "f90": 0.145, "f91": 1, "f94": 30.42, "f95": 49.82, "f96": 70.99, "f97": 75.37, "f98": 163.5, "f99": 17.15, "f100": 49.82, "f101": 0.04744, "f102": 0.09839, "f103": 0.07192, "f104": 0.1785, "f105": 0.00815, "f106": 0.04744, "f107": 0, "f108": 0.2259, "f109": 0, "f110": 213.3, "f111": 9488, "f112": 9488, "f113": 0, "f114": 104, "f116": 0.6767, "f148": 6.468, "f149": 90.95, "f151": 0.9708, "f152": 0.9708, "f154": 0.7601, "f155": 1, "f156": -4.967, "f157": 0.4073, "f158": 0.7711, "f159": 0.2289, "f165": 90.95, "f166": 70.22, "f167": 91.7, "f168": 87.4, "f169": 91.07, "f171": 70.22, "f172": 0.7556, "f173": 91.7, "f174": 1.645, "f175": 6.813, "f176": 90.96, "f177": 1.316, "f178": 1.316, "f179": 6.468, "f180": 90.95, "f181": 0.9708, "f182": 0.9708, "f183": 6.345, "f184": 91.03, "f185": 0.8525, "f186": 0.8525, "f187": 6.376, "f188": 90.98, "f189": 0.8809, "f190": 0.8809, "f266": 0.735, "f267": 1.04, "f268": 3, "f269": 2, "f270": 0.1078, "f271": 1, "f272": 5, "f274": 87.4, "f275": 0.8989, "f276": 91.07, "f277": 1.105, "f278": 0, "f279": 0.478, "f285": 0.2677, "f286": 0.2429, "f288": 0.9708, "f289": 0.7556, "f290": 1.645, "f291": 0.8989, "f292": 1.105}, {"name": "Nova 2.0 Pro Preview (medium)", "creator": "Amazon", "open_weights": false, "f3": 0.89, "f20": 0.312, "f35": 256000, "f37": 0, "f82": 477.2, "f85": 0.7848, "f89": 0.09407, "f92": 0.7905, "f116": 0.64, "f147": 0.7302, "f148": 30.3, "f149": 122.8, "f150": 16.29, "f151": 26.22, "f152": 9.932, "f154": 0.6451, "f155": 1, "f171": 102, "f172": 3.885, "f173": 173.2, "f174": 23.43, "f271": 1.25, "f272": 10, "f274": 112.5, "f275": 8.402, "f276": 147.8, "f277": 13.24, "f282": 0.9269, "f284": 0.2959, "f287": 0.2424}, {"name": "Inkling (xhigh) (FP8)", "creator": "Thinking Machines", "open_weights": true, "f0": 582.8, "f1": 543, "f2": 623, "f4": 0.2375, "f6": 0.04985, "f7": 743.5, "f8": 727.5, "f9": 759.2, "f10": 833.1, "f11": 824.1, "f12": 841.7, "f13": 871.1, "f14": 856.6, "f15": 887, "f16": 0.1929, "f17": 833.1, "f18": 127.6, "f19": 0.83, "f20": 0.16, "f22": 12637941, "f23": 4634454699, "f24": 80298842, "f25": 67660901, "f26": 24.89, "f27": 21.96, "f28": 23.22, "f29": 17.57, "f30": 23.11, "f31": 18.94, "f32": 467, "f33": 439, "f34": 495, "f35": 762000, "f36": 1.26, "f37": 0.05429, "f38": 0.18, "f43": 148.4, "f44": 50, "f45": 0.3796, "f63": 7.42, "f64": 6.56, "f65": 6.13, "f66": 6.66, "f67": 5.64, "f68": 5.9, "f69": 1212, "f70": 6.27, "f71": 6.4, "f72": 6.31, "f73": 6.93, "f74": 6.58, "f75": 6.42, "f76": 6.65, "f77": 5.77, "f78": 0.1584, "f79": 0.03925, "f80": 4.878, "f81": 0.128, "f82": 1081, "f83": 1059, "f84": 1102, "f85": 0.8717, "f86": 0, "f89": 0.3188, "f90": 0.106, "f91": 7, "f93": 41, "f94": 12.48, "f95": 51.18, "f96": 762.5, "f97": 138.6, "f98": 911.4, "f99": 10.29, "f100": 325.2, "f101": 0.0704, "f102": 0.9742, "f103": 0.1654, "f104": 1.144, "f105": 0.004704, "f106": 0.2076, "f107": 0.1372, "f108": 1.352, "f109": 274, "f110": 1237, "f111": 17380, "f112": 51260, "f113": 33870, "f114": 207.1, "f116": 0.7733, "f148": 13.91, "f149": 199.8, "f150": 10.01, "f151": 11.4, "f152": 0.8459, "f153": 0.06111, "f154": 0.7347, "f155": 6, "f156": -1.5, "f157": 0.393, "f158": 0.6722, "f159": 0.3278, "f160": 6, "f161": 38.89, "f162": 1, "f163": 0, "f164": 0, "f165": 202, "f166": 58.53, "f167": 305.9, "f168": 179.5, "f169": 236.2, "f170": 975, "f171": 91, "f172": 0.6383, "f173": 275.7, "f174": 2.66, "f175": 14.92, "f176": 249.3, "f177": 12.91, "f178": 4.887, "f179": 14.12, "f180": 202, "f181": 11.65, "f182": 1.748, "f183": 16.22, "f184": 179.1, "f185": 13.43, "f186": 2.263, "f187": 19.55, "f188": 146.1, "f189": 16.13, "f190": 2.435, "f191": 61, "f192": 79, "f193": 72, "f194": 85, "f195": 55, "f196": 74, "f197": 62, "f198": 71, "f199": 74, "f200": 97, "f201": 47, "f202": 54, "f203": 47, "f204": 64, "f205": 41, "f206": 52, "f207": 67.83, "f208": 77.73, "f209": 67.83, "f210": 62.88, "f211": 92.58, "f212": 50.5, "f213": 52.98, "f214": 45.55, "f215": 4.273, "f216": 14.77, "f217": 18.23, "f218": 4107, "f219": 11.85, "f220": 9.399, "f221": 0.1622, "f222": 6.024, "f223": 0.01333, "f224": 0.05556, "f225": 0.06889, "f226": 3.893, "f227": 3.259, "f228": 3.651, "f229": 10.79, "f230": 9.303, "f231": 3.578, "f232": 17.3, "f233": 44.26, "f234": 0.2967, "f235": 612.9, "f236": 595.6, "f237": 862.5, "f238": 1136, "f239": 1396, "f240": 1255, "f241": 691.5, "f242": 874.8, "f243": 1336, "f244": 907.9, "f245": 1070, "f246": 1024, "f247": 946.5, "f248": 1018, "f249": 1413, "f250": 1258, "f251": 846, "f252": 1707, "f253": 857.6, "f254": 884.6, "f255": 1089, "f256": 1041, "f257": 1299, "f258": 1589, "f259": 1357, "f260": 688.5, "f261": 1530, "f262": 845.3, "f263": 1137, "f264": 838.9, "f265": 448.6, "f266": 0.724, "f267": 1.03, "f268": 2.525, "f269": 1.762, "f270": 0.2162, "f271": 0.95, "f272": 4.05, "f274": 174.5, "f275": 0.7426, "f276": 231.6, "f277": 1.164, "f278": 2000, "f279": 0.4699, "f280": 50, "f281": 137.3, "f283": 0.2907, "f284": 0.5506, "f285": 0.0101, "f286": 0, "f288": 1.748, "f289": 1.642, "f290": 3.097, "f291": 1.7, "f292": 2.256}, {"name": "Qwen3.5 397B A17B", "creator": "Alibaba", "open_weights": true, "f5": 0.1534, "f6": 0.06887, "f17": 562.8, "f20": 0.22, "f35": 262100, "f37": 0.01706, "f43": 146.8, "f45": 0.3089, "f46": 16.81, "f47": 13.65, "f48": 11.23, "f49": 12.12, "f50": 9.42, "f51": 14.35, "f52": 15.87, "f53": 15, "f54": 12.27, "f55": 12.23, "f56": 9.85, "f57": 14, "f58": 10.92, "f59": 12.88, "f60": 12.69, "f61": 13.58, "f62": 13, "f81": 0.122, "f82": 801, "f85": 0.8929, "f89": 0.2896, "f90": 0.124, "f92": 0.7878, "f115": 0.3409, "f116": 0.7733, "f148": 64.23, "f149": 59.42, "f150": 53.62, "f151": 55.81, "f152": 1.497, "f153": 0.08889, "f154": 0.7728, "f155": 6, "f171": 48.02, "f172": 1.18, "f173": 67.94, "f174": 2.233, "f271": 0.45, "f272": 3, "f274": 58.73, "f275": 1.372, "f276": 62.01, "f277": 1.688, "f279": 0.4479, "f282": 0.9561, "f283": 0.134, "f284": 0.5131, "f285": 0, "f287": 0.4091}, {"name": "MiMo-V2.6-Flash", "creator": "Xiaomi", "open_weights": true, "f6": 0.6405, "f7": 1652, "f8": 1633, "f9": 1670, "f10": 1486, "f11": 1476, "f12": 1496, "f13": 1401, "f14": 1385, "f15": 1419, "f16": 0.5179, "f17": 1486, "f18": 13.81, "f19": 0.98, "f20": 0.0018, "f22": 25765454, "f23": 10352463436, "f24": 162660962, "f25": 136895508, "f26": 34.2, "f27": 30.98, "f28": 36.93, "f29": 35.05, "f30": 33.8, "f31": 45.72, "f32": 1052, "f33": 1032, "f34": 1071, "f35": 1000000, "f36": 0.08239, "f37": 0.12, "f38": 0.295, "f78": 0.4207, "f79": 0.2162, "f81": 0.09, "f82": 1615, "f83": 1594, "f84": 1636, "f89": 0.3508, "f90": 0.137, "f91": 4, "f93": 15, "f94": 26.73, "f95": 7.214, "f96": 28.34, "f97": 30.27, "f98": 60.6, "f99": 1.983, "f100": 45.55, "f101": 0.008986, "f102": 0.04844, "f103": 0.04225, "f104": 0.09162, "f105": 0.0009394, "f106": 0.03691, "f107": 0.02792, "f108": 0.1285, "f109": 38.33, "f110": 106.1, "f111": 32090, "f112": 131800, "f113": 99710, "f114": 2351, "f116": 0.7433, "f148": 50.58, "f149": 51.95, "f150": 38.59, "f151": 40.93, "f152": 2.342, "f153": 0.1167, "f154": 0.7306, "f155": 4, "f156": -10.83, "f157": 0.272, "f158": 0.5224, "f159": 0.4776, "f160": 6, "f161": 52.78, "f162": 3, "f163": 0.5, "f164": 0, "f165": 54.47, "f166": 34.3, "f167": 80.91, "f168": 42.71, "f169": 70.7, "f170": 309, "f171": 33.32, "f172": 1.435, "f173": 115.4, "f174": 10.23, "f175": 74.43, "f176": 71.12, "f177": 67.4, "f178": 39.28, "f179": 48.95, "f180": 54.47, "f181": 39.77, "f182": 3.055, "f183": 52.68, "f184": 49.76, "f185": 42.63, "f186": 2.437, "f187": 54.67, "f188": 47.18, "f189": 44.07, "f190": 1.68, "f266": 0.05796, "f267": 0.1414, "f268": 0.21, "f269": 0.175, "f270": 0.006863, "f271": 0.091, "f272": 0.182, "f274": 40.05, "f275": 1.648, "f276": 78.18, "f277": 4.13, "f278": 2000, "f279": 0.5127, "f285": 0.2273, "f286": 0.04286, "f288": 3.055, "f289": 1.955, "f290": 7.853, "f291": 2.526, "f292": 4.117}, {"name": "Mistral Small 4 (non-reasoning)", "creator": "Mistral", "open_weights": true, "f20": 0.015, "f35": 262144, "f37": 0.002857, "f85": 0.5707, "f89": 0.038, "f92": 0.3279, "f116": 0.2833, "f148": 3.89, "f149": 169.5, "f151": 0.9408, "f152": 0.9408, "f154": 0.4647, "f155": 1, "f171": 118.6, "f172": 0.7262, "f173": 200.4, "f174": 1.361, "f271": 0.15, "f272": 0.6, "f274": 135.7, "f275": 0.7691, "f276": 181, "f277": 1.081, "f282": 0.1842, "f287": 0.1061}, {"name": "Solar Pro 4", "creator": "Upstage", "open_weights": false, "f6": 0.1359, "f17": 1093, "f20": 0.06, "f35": 512000, "f37": 0.06286, "f81": 0.07, "f82": 1106, "f85": 0.8909, "f89": 0.2984, "f116": 0.7067, "f148": 26.74, "f149": 101.1, "f150": 19.79, "f151": 21.79, "f152": 2.002, "f155": 1, "f171": 77.04, "f172": 1.806, "f173": 141, "f174": 2.666, "f271": 0.3, "f272": 1.2, "f274": 97.85, "f275": 1.884, "f276": 110.1, "f277": 2.158, "f279": 0.4803, "f283": 0.233, "f284": 0.573, "f285": 0}, {"name": "gpt-oss-20b (low)", "creator": "OpenAI", "open_weights": true, "f3": 0.6233, "f35": 131072, "f37": 0, "f46": 14.81, "f47": 8.58, "f48": 5.31, "f49": 12.69, "f50": 5.46, "f51": 8.5, "f52": 9.76, "f53": 8.67, "f54": 5.81, "f55": 5.58, "f56": 8.65, "f57": 7.62, "f58": 7.92, "f59": 10.62, "f60": 6.31, "f61": 10.31, "f62": 9.19, "f85": 0.6111, "f89": 0.05283, "f92": 0.5782, "f116": 0.31, "f147": 0.6519, "f148": 17.82, "f149": 216.7, "f150": 9.227, "f151": 15.52, "f152": 0.7496, "f155": 3, "f171": 74.33, "f172": 0.6527, "f173": 400.5, "f174": 1.666, "f271": 0.03, "f272": 0.13, "f274": 103.7, "f275": 0.7055, "f276": 252.5, "f277": 0.8427, "f282": 0.5029, "f287": 0.04545}, {"name": "o3", "creator": "OpenAI", "open_weights": false, "f3": 0.8833, "f20": 0.5, "f35": 200000, "f37": 0.01143, "f43": 146.8, "f46": 17.12, "f47": 13.19, "f48": 9.54, "f49": 12.46, "f50": 10.19, "f51": 14.42, "f52": 16.56, "f53": 15.47, "f54": 12.88, "f55": 12.69, "f56": 6.81, "f57": 14.62, "f58": 9.73, "f59": 13.58, "f60": 13.65, "f61": 14.08, "f62": 13.5, "f85": 0.8273, "f89": 0.2005, "f92": 0.7143, "f116": 0.7467, "f147": 0.8085, "f148": 18.31, "f149": 124.2, "f151": 14.09, "f152": 14.09, "f154": 0.7006, "f155": 2, "f171": 62.66, "f172": 6.733, "f173": 184.4, "f174": 25.37, "f271": 2, "f272": 8, "f274": 106.7, "f275": 10.75, "f276": 153, "f277": 17.66, "f280": 53.1, "f281": 146.4, "f282": 0.807, "f287": 0.3712}, {"name": "GLM-5.3-Flash", "creator": "Z AI", "open_weights": true, "f0": 936.6, "f1": 906, "f2": 967, "f4": 0.25, "f6": 0.6037, "f7": 1623, "f8": 1606, "f9": 1639, "f10": 1451, "f11": 1443, "f12": 1459, "f13": 1410, "f14": 1398, "f15": 1423, "f16": 0.4636, "f17": 1451, "f18": 89.54, "f19": 0.8, "f20": 0.015, "f22": 25129483, "f23": 9742204174, "f24": 124286029, "f25": 99156546, "f26": 36.9, "f27": 34.4, "f28": 38.78, "f29": 36.59, "f30": 34.79, "f31": 44.5, "f32": 974.5, "f33": 955, "f34": 994, "f35": 1024000, "f36": 0.4144, "f37": 0.1543, "f38": 0.24, "f40": 0.482, "f41": 63.39, "f42": 84.96, "f43": 153.1, "f44": 60, "f45": 0.3321, "f78": 0.41, "f79": 0.1761, "f80": 17.07, "f81": 0.154, "f82": 1649, "f83": 1632, "f84": 1666, "f85": 0.9121, "f86": 0.008333, "f89": 0.3985, "f90": 0.182, "f91": 26, "f93": 18, "f94": 27.75, "f95": 12.56, "f96": 286.4, "f97": 26.86, "f98": 315.8, "f99": 2.553, "f100": 62.14, "f101": 0.01581, "f102": 0.4764, "f103": 0.03862, "f104": 0.5162, "f105": 0.001213, "f106": 0.0671, "f107": 0.05129, "f108": 0.5833, "f109": 49.58, "f110": 377.9, "f111": 31620, "f112": 134200, "f113": 102600, "f114": 1587, "f115": 0.5124, "f116": 0.8, "f148": 14.78, "f149": 178.9, "f150": 11.18, "f151": 11.98, "f152": 0.8709, "f153": 0.1167, "f155": 22, "f156": 0.6667, "f157": 0.282, "f158": 0.3835, "f159": 0.6165, "f160": 6, "f161": 44.44, "f162": 2, "f163": 0, "f164": 0, "f165": 70.51, "f166": 41.77, "f167": 97.6, "f168": 58.24, "f169": 81.72, "f170": 320, "f171": 64.03, "f172": 0.6822, "f173": 289.2, "f174": 3.318, "f175": 36.44, "f176": 90.17, "f177": 30.89, "f178": 8.714, "f179": 37.05, "f180": 70.51, "f181": 29.96, "f182": 1.595, "f183": 38.92, "f184": 66.55, "f185": 31.41, "f186": 1.352, "f187": 50.42, "f188": 50.99, "f189": 40.61, "f190": 1.383, "f191": 72, "f192": 90, "f193": 92, "f194": 96, "f195": 75, "f196": 83, "f197": 50, "f198": 61, "f199": 20, "f200": 48, "f201": 30, "f202": 38, "f203": 59, "f204": 80, "f205": 83, "f206": 93, "f207": 80.2, "f208": 95.05, "f209": 77.73, "f210": 60.4, "f211": 35.65, "f212": 33.18, "f213": 70.3, "f214": 85.15, "f215": 2.124, "f216": 16.08, "f217": 6.508, "f218": 2605, "f219": 6.071, "f220": 9.972, "f221": 0.07, "f222": 6.923, "f223": 0.01556, "f224": 0.1011, "f225": 0.09333, "f226": 0.9689, "f227": 2.019, "f228": 1.562, "f229": 7.613, "f230": 3.478, "f231": 1.541, "f232": 6.934, "f233": 26.64, "f234": 0.03111, "f235": 401.4, "f236": 776.1, "f237": 900.1, "f238": 1194, "f239": 1325, "f240": 1425, "f241": 740.9, "f242": 768.4, "f243": 1575, "f244": 1184, "f245": 1208, "f246": 1097, "f247": 1083, "f248": 1287, "f249": 1417, "f250": 1604, "f251": 943.9, "f252": 1519, "f253": 1393, "f254": 883.7, "f255": 1180, "f256": 1192, "f257": 972.6, "f258": 1363, "f259": 1011, "f260": 1336, "f261": 1237, "f262": 793.1, "f263": 951.7, "f264": 871, "f265": 712.4, "f266": 0.101, "f267": 0.1535, "f268": 0.325, "f269": 0.2375, "f270": 0.03578, "f271": 0.075, "f272": 0.25, "f274": 114.5, "f275": 0.7641, "f276": 244.4, "f277": 1.53, "f278": 2000, "f279": 0.5162, "f281": 152.1, "f283": 0.4722, "f284": 0.8427, "f285": 0.3283, "f286": 0.04762, "f288": 1.595, "f289": 1.331, "f290": 3.318, "f291": 1.414, "f292": 2.709}, {"name": "GPT-6 Luna (xhigh)", "creator": "OpenAI", "open_weights": false, "f6": 0.478, "f7": 1255, "f8": 1237, "f9": 1274, "f10": 1235, "f11": 1226, "f12": 1244, "f13": 1329, "f14": 1316, "f15": 1343, "f16": 0.3364, "f17": 1235, "f18": 7.507, "f19": 0.9, "f20": 0.01, "f21": 0.125, "f22": 13716625, "f23": 4274179795, "f24": 56118451, "f25": 42401826, "f26": 32.1, "f27": 28.84, "f28": 30.55, "f29": 30.49, "f30": 28.38, "f31": 39.39, "f35": 1000000, "f36": 0.1041, "f37": 0.1743, "f38": 0.355, "f44": 50, "f78": 0.3322, "f79": 0.1842, "f81": 0.186, "f82": 1373, "f83": 1352, "f84": 1394, "f89": 0.3434, "f90": 0.189, "f91": 1, "f94": 23.3, "f95": 6.858, "f96": 41.41, "f97": 14.56, "f98": 57.68, "f99": 1.715, "f100": 28.06, "f101": 0.006936, "f102": 0.06511, "f103": 0.01622, "f104": 0.08215, "f105": 0.000815, "f106": 0.02195, "f107": 0.01501, "f108": 0.1041, "f109": 21.2, "f110": 85.74, "f111": 13870, "f112": 43890, "f113": 30020, "f114": 370.5, "f116": 0.8, "f148": 21.74, "f149": 118, "f151": 17.5, "f152": 17.5, "f153": 0.2056, "f154": 0.7971, "f155": 1, "f156": -12.97, "f157": 0.386, "f158": 0.8398, "f159": 0.1602, "f165": 118, "f166": 86.5, "f167": 149.6, "f168": 101.8, "f169": 134.1, "f171": 86.5, "f172": 5.505, "f173": 149.6, "f174": 60.77, "f175": 71.26, "f176": 132.4, "f177": 67.48, "f178": 67.48, "f179": 21.74, "f180": 118, "f181": 17.5, "f182": 17.5, "f183": 29.01, "f184": 116, "f185": 24.7, "f186": 24.7, "f187": 24.1, "f188": 106, "f189": 19.38, "f190": 19.38, "f266": 0.077, "f267": 0.104, "f268": 0.3, "f269": 0.2, "f270": 0.01569, "f271": 0.1, "f272": 0.5, "f274": 101.8, "f275": 11.24, "f276": 134.1, "f277": 40.14, "f278": 0, "f279": 0.5174, "f285": 0.08081, "f286": 0.05238, "f288": 17.5, "f289": 5.505, "f290": 60.77, "f291": 11.24, "f292": 40.14}, {"name": "North Mini Code", "creator": "Cohere", "open_weights": true, "f6": 0.01491, "f17": 212.4, "f35": 256000, "f37": 0.002857, "f81": 0.018, "f82": 319, "f85": 0.7566, "f89": 0.1108, "f90": 0.042, "f92": 0.5755, "f116": 0.3733, "f148": 37.05, "f149": 68.3, "f150": 29.28, "f151": 29.73, "f152": 0.4431, "f153": 0.04444, "f155": 1, "f171": 30.78, "f172": 0.338, "f173": 204.7, "f174": 4.635, "f271": 0, "f272": 0, "f274": 52.07, "f275": 0.383, "f276": 106, "f277": 0.5025, "f279": 0.3877, "f282": 0.3743, "f283": 0.06392, "f284": 0.3558, "f285": 0.005051, "f287": 0.3106}, {"name": "GPT-6 Astra (xhigh)", "creator": "OpenAI", "open_weights": false, "f6": 0.6718, "f7": 1703, "f8": 1688, "f9": 1720, "f10": 1543, "f11": 1535, "f12": 1552, "f13": 1519, "f14": 1504, "f15": 1536, "f16": 0.5232, "f17": 1543, "f18": 597.3, "f19": 0.9, "f20": 1, "f21": 12.5, "f22": 12836266, "f23": 1163882214, "f24": 32284672, "f25": 19448406, "f26": 57.79, "f27": 60.33, "f28": 56.81, "f29": 52.65, "f30": 55.65, "f31": 57.86, "f35": 1000000, "f36": 3.659, "f37": 0.3143, "f38": 0.705, "f40": 4.429, "f41": 74.12, "f42": 80.53, "f44": 50, "f79": 0.414, "f81": 0.322, "f82": 1569, "f83": 1550, "f84": 1589, "f85": 0.9626, "f89": 0.5459, "f90": 0.615, "f91": 1, "f94": 55.26, "f95": 641.8, "f96": 1076, "f97": 882.5, "f98": 2132, "f99": 173.5, "f100": 1614, "f101": 0.6015, "f102": 1.343, "f103": 0.8977, "f104": 2.323, "f105": 0.08252, "f106": 1.336, "f107": 0.7346, "f108": 3.659, "f109": 972.4, "f110": 3746, "f111": 12030, "f112": 26720, "f113": 14690, "f114": 418.4, "f116": 0.8, "f148": 105.2, "f149": 63.85, "f151": 97.42, "f152": 97.42, "f153": 0.3611, "f154": 0.8624, "f155": 1, "f156": 43.67, "f157": 0.6103, "f158": 0.4457, "f159": 0.5543, "f165": 63.85, "f166": 39.44, "f167": 105.7, "f168": 56.71, "f169": 80.49, "f171": 39.44, "f172": 30.58, "f173": 105.7, "f174": 237.1, "f175": 220.9, "f176": 86.97, "f177": 215.1, "f178": 215.1, "f179": 105.2, "f180": 63.85, "f181": 97.42, "f182": 97.42, "f183": 78.27, "f184": 77.01, "f185": 71.78, "f186": 71.78, "f187": 75.79, "f188": 49.08, "f189": 65.6, "f190": 65.6, "f266": 7.7, "f267": 10.4, "f268": 30, "f269": 20, "f270": 1.569, "f271": 10, "f272": 50, "f274": 56.71, "f275": 56.53, "f276": 80.49, "f277": 177, "f278": 0, "f279": 0.5567, "f283": 0.4309, "f284": 0.8914, "f285": 0.596, "f286": 0.5476, "f288": 97.42, "f289": 30.58, "f290": 237.1, "f291": 56.53, "f292": 177}, {"name": "Claude Haiku 5.5 (high)", "creator": "Anthropic", "open_weights": false, "f6": 0.3373, "f7": 1688, "f8": 1668, "f9": 1707, "f10": 1440, "f11": 1429, "f12": 1449, "f13": 1307, "f14": 1288, "f15": 1324, "f16": 0.4697, "f17": 1440, "f18": 20.29, "f19": 0.9, "f20": 0.01, "f21": 0.125, "f22": 26876202, "f23": 5516025284, "f24": 89814062, "f25": 62937860, "f26": 39.44, "f27": 36.25, "f28": 37.84, "f29": 32.19, "f30": 35.04, "f31": 37.11, "f35": 1000000, "f36": 0.1586, "f37": 0.1857, "f38": 0.425, "f44": 40, "f78": 0.4364, "f79": 0.232, "f81": 0.172, "f82": 1425, "f83": 1406, "f84": 1443, "f86": 0.01111, "f89": 0.3726, "f90": 0.237, "f91": 1, "f94": 29.62, "f95": 13.44, "f96": 53.26, "f97": 21.36, "f98": 76.51, "f99": 1.878, "f100": 44.91, "f101": 0.01527, "f102": 0.08636, "f103": 0.02728, "f104": 0.1145, "f105": 0.0008882, "f106": 0.04403, "f107": 0.02876, "f108": 0.1586, "f109": 31.47, "f110": 121.4, "f111": 30540, "f112": 88060, "f113": 57530, "f114": 304.5, "f116": 0.7733, "f148": 15.96, "f149": 177.6, "f151": 13.14, "f152": 13.14, "f153": 0.15, "f155": 1, "f156": 5.3, "f157": 0.3183, "f158": 0.3892, "f159": 0.6108, "f165": 177.6, "f166": 122.1, "f167": 234.8, "f168": 145.5, "f169": 201.2, "f171": 122.1, "f172": 8.056, "f173": 234.8, "f174": 45.5, "f175": 80.69, "f176": 231.5, "f177": 78.53, "f178": 78.53, "f179": 15.96, "f180": 177.6, "f181": 13.14, "f182": 13.14, "f183": 17.27, "f184": 188.1, "f185": 14.61, "f186": 14.61, "f187": 12.57, "f188": 127.9, "f189": 8.667, "f190": 8.667, "f266": 0.077, "f267": 0.104, "f268": 0.3, "f269": 0.2, "f270": 0.01569, "f271": 0.1, "f272": 0.5, "f274": 145.5, "f275": 9.812, "f276": 201.2, "f277": 22.75, "f278": 0, "f279": 0.4873, "f285": 0.2172, "f286": 0.1, "f288": 13.14, "f289": 8.056, "f290": 45.5, "f291": 9.812, "f292": 22.75}, {"name": "Grok 4.7 (low)", "creator": "SpaceXAI", "open_weights": false, "f6": 0.5674, "f7": 1725, "f8": 1707, "f9": 1744, "f10": 1494, "f11": 1484, "f12": 1504, "f13": 1399, "f14": 1381, "f15": 1419, "f16": 0.4929, "f17": 1494, "f18": 190.8, "f19": 0.75, "f20": 0.5, "f22": 17041137, "f23": 2825944930, "f24": 51253468, "f25": 34212331, "f26": 42.75, "f27": 37.44, "f28": 45.3, "f29": 42.9, "f30": 44.4, "f31": 49.26, "f35": 500000, "f36": 2.922, "f37": 0.1343, "f38": 0.41, "f44": 20, "f78": 0.3959, "f79": 0.2182, "f81": 0.214, "f82": 1592, "f83": 1570, "f84": 1614, "f89": 0.3916, "f90": 0.185, "f91": 1, "f94": 30.88, "f95": 102.2, "f96": 1264, "f97": 563.3, "f98": 1861, "f99": 34.23, "f100": 307.5, "f101": 0.126, "f102": 1.882, "f103": 0.7725, "f104": 2.666, "f105": 0.01207, "f106": 0.256, "f107": 0.13, "f108": 2.922, "f109": 205.3, "f110": 2169, "f111": 21000, "f112": 42670, "f113": 21670, "f114": 595.2, "f116": 0.8, "f148": 13.08, "f149": 72.1, "f151": 6.15, "f152": 6.15, "f153": 0.2111, "f154": 0.7815, "f155": 1, "f156": 27.4, "f157": 0.4573, "f158": 0.3378, "f159": 0.6622, "f165": 72.1, "f166": 46.98, "f167": 129.4, "f168": 60.01, "f169": 111.5, "f171": 46.98, "f172": 1.676, "f173": 129.4, "f174": 14.75, "f175": 22.29, "f176": 121, "f177": 18.16, "f178": 18.16, "f179": 13.08, "f180": 72.1, "f181": 6.15, "f182": 6.15, "f183": 10.42, "f184": 79.41, "f185": 4.125, "f186": 4.125, "f187": 10.76, "f188": 53.64, "f189": 1.439, "f190": 1.439, "f266": 1.35, "f267": 2.04, "f268": 4, "f269": 3, "f270": 0.5686, "f271": 2, "f272": 6, "f274": 60.01, "f275": 2.642, "f276": 111.5, "f277": 9.746, "f278": 0, "f279": 0.5486, "f285": 0.1616, "f286": 0.04762, "f288": 6.15, "f289": 1.676, "f290": 14.75, "f291": 2.642, "f292": 9.746}, {"name": "Qwen3.5 9B (non-reasoning) (FP8)", "creator": "Alibaba", "open_weights": true, "f35": 262144, "f37": 0.005714, "f85": 0.7859, "f89": 0.09361, "f92": 0.3782, "f116": 0.46, "f148": 6.868, "f149": 82.69, "f151": 0.822, "f152": 0.822, "f154": 0.6676, "f155": 1, "f171": 52.45, "f172": 0.6531, "f173": 111.9, "f174": 1.519, "f271": 0.17, "f272": 0.25, "f274": 66.18, "f275": 0.71, "f276": 90, "f277": 1.014, "f282": 0.8509, "f284": 0.2135, "f287": 0.1818}, {"name": "Qwen3.5 122B A10B (FP8)", "creator": "Alibaba", "open_weights": true, "f6": 0.05481, "f17": 497.5, "f35": 262100, "f37": 0.005714, "f81": 0.034, "f82": 822, "f85": 0.8566, "f89": 0.2521, "f90": 0.073, "f92": 0.7571, "f116": 0.7633, "f148": 33.64, "f149": 80.81, "f150": 25.21, "f151": 27.34, "f152": 2.043, "f153": 0.07778, "f154": 0.7497, "f155": 4, "f171": 51.99, "f172": 1.745, "f173": 112.3, "f174": 2.484, "f271": 0.26, "f272": 2.08, "f274": 65.08, "f275": 1.957, "f276": 97.47, "f277": 2.159, "f279": 0.397, "f282": 0.9357, "f283": 0.1526, "f284": 0.4757, "f285": 0, "f287": 0.3106}, {"name": "Nemotron 3 Nano (non-reasoning) (FP4)", "creator": "NVIDIA", "open_weights": true, "f3": 0.1333, "f35": 262144, "f37": 0, "f82": -349, "f85": 0.399, "f89": 0.04588, "f92": 0.3748, "f116": 0.1067, "f147": 0.3598, "f148": 3.225, "f149": 226.4, "f151": 0.5373, "f152": 0.5373, "f155": 3, "f171": 105.5, "f172": 0.4129, "f173": 332, "f174": 1.197, "f271": 0.05, "f272": 0.2, "f274": 187.5, "f275": 0.5066, "f276": 298.2, "f277": 0.6112, "f282": 0.2544, "f287": 0.1212}, {"name": "MiMo-V2.6-Pro", "creator": "Xiaomi", "open_weights": true, "f0": 983.1, "f1": 952, "f2": 1014, "f4": 0.375, "f6": 0.5862, "f7": 1790, "f8": 1773, "f9": 1809, "f10": 1511, "f11": 1501, "f12": 1522, "f13": 1298, "f14": 1280, "f15": 1315, "f16": 0.5475, "f17": 1511, "f18": 34.6, "f19": 0.9917, "f20": 0.004, "f22": 28741941, "f23": 7473440440, "f24": 130574087, "f25": 101832146, "f26": 37.66, "f27": 34.27, "f28": 38.93, "f29": 35.78, "f30": 34.97, "f31": 46.87, "f32": 1052, "f33": 1032, "f34": 1071, "f35": 1000000, "f36": 0.5491, "f37": 0.2657, "f38": 0.34, "f78": 0.4542, "f79": 0.2397, "f81": 0.192, "f82": 1691, "f83": 1670, "f84": 1712, "f89": 0.4935, "f90": 0.152, "f91": 4, "f93": 42, "f94": 29.89, "f95": 25.01, "f96": 26.23, "f97": 78.92, "f98": 107.1, "f99": 1.98, "f100": 113.6, "f101": 0.03028, "f102": 0.04275, "f103": 0.1083, "f104": 0.1518, "f105": 0.0008284, "f106": 0.1053, "f107": 0.07506, "f108": 0.2572, "f109": 88.59, "f110": 220.7, "f111": 34800, "f112": 121100, "f113": 86270, "f114": 2086, "f116": 0.8633, "f148": 50.51, "f149": 52.18, "f150": 38.51, "f151": 40.88, "f152": 2.37, "f153": 0.1278, "f155": 4, "f156": -4.467, "f157": 0.348, "f158": 0.6022, "f159": 0.3978, "f160": 6, "f161": 52.78, "f162": 3, "f163": 0.5, "f164": 0, "f165": 55.82, "f166": 34.22, "f167": 86.69, "f168": 40.65, "f169": 71.74, "f170": 1020, "f171": 33.97, "f172": 1.213, "f173": 130.4, "f174": 5.277, "f175": 82.33, "f176": 46.88, "f177": 71.67, "f178": 29, "f179": 48.06, "f180": 55.82, "f181": 39.1, "f182": 3.276, "f183": 59.7, "f184": 44.24, "f185": 48.39, "f186": 3.182, "f187": 65.08, "f188": 40.21, "f189": 52.64, "f190": 2.902, "f191": 15, "f192": 21, "f193": 21, "f194": 31, "f195": 58, "f196": 74, "f197": 15, "f198": 20, "f199": 18, "f200": 45, "f201": 56, "f202": 66, "f203": 35, "f204": 49, "f205": 52, "f206": 60, "f207": 15.85, "f208": 28.23, "f209": 70.3, "f210": 15.85, "f211": 30.7, "f212": 60.4, "f213": 43.07, "f214": 55.45, "f215": 2.626, "f216": 24.36, "f217": 14.18, "f218": 2515, "f219": 5.116, "f220": 8.157, "f221": 0.1689, "f222": 5.811, "f223": 0.8644, "f224": 0.3411, "f225": 0.1522, "f226": 4.498, "f227": 2.943, "f228": 3.65, "f229": 6.884, "f230": 5.143, "f231": 2.423, "f232": 7.046, "f233": 21.74, "f234": 0.2167, "f235": 368.1, "f236": 796.7, "f237": 652.4, "f238": 808.7, "f239": 1224, "f240": 1012, "f241": 672.6, "f242": 723.2, "f243": 1077, "f244": 948.9, "f245": 917.3, "f246": 792.6, "f247": 1038, "f248": 1078, "f249": 1042, "f250": 856.2, "f251": 643.4, "f252": 1325, "f253": 693.1, "f254": 1045, "f255": 777.3, "f256": 647.3, "f257": 784.1, "f258": 1394, "f259": 1545, "f260": 657.3, "f261": 1629, "f262": 712.4, "f263": 944.2, "f264": 862.2, "f265": 456.3, "f266": 0.1765, "f267": 0.4393, "f268": 0.6525, "f269": 0.5437, "f270": 0.01632, "f271": 0.387, "f272": 0.783, "f274": 39.17, "f275": 1.829, "f276": 73.62, "f277": 3.898, "f278": 2000, "f279": 0.6088, "f285": 0.3485, "f286": 0.05714, "f288": 3.276, "f289": 2.178, "f290": 4.965, "f291": 2.622, "f292": 3.838}, {"name": "Claude Sonnet 5.5 (high with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.5943, "f7": 1872, "f8": 1854, "f9": 1892, "f10": 1634, "f11": 1624, "f12": 1644, "f13": 1493, "f14": 1476, "f15": 1510, "f16": 0.602, "f17": 1634, "f18": 297.6, "f19": 0.95, "f20": 0.1, "f21": 2.5, "f22": 24244179, "f23": 3783822612, "f24": 54656782, "f25": 30412603, "f26": 46.15, "f27": 45.79, "f28": 44.46, "f29": 43.94, "f30": 44.12, "f31": 51.19, "f35": 1000000, "f36": 1.636, "f37": 0.2457, "f38": 0.475, "f44": 40, "f78": 0.443, "f79": 0.2574, "f81": 0.252, "f82": 1558, "f83": 1536, "f84": 1580, "f89": 0.4583, "f90": 0.338, "f91": 1, "f94": 41.12, "f95": 242.4, "f96": 363.7, "f97": 320.3, "f98": 721.7, "f99": 37.71, "f100": 546.6, "f101": 0.2668, "f102": 0.6227, "f103": 0.4114, "f104": 1.052, "f105": 0.01784, "f106": 0.5842, "f107": 0.3174, "f108": 1.636, "f109": 304.1, "f110": 1268, "f111": 26680, "f112": 58420, "f113": 31740, "f114": 334.1, "f116": 0.78, "f148": 14.3, "f149": 112.1, "f151": 9.837, "f152": 9.837, "f153": 0.1889, "f155": 1, "f156": 18.73, "f157": 0.5033, "f158": 0.6362, "f159": 0.3638, "f165": 112.1, "f166": 86.02, "f167": 141.6, "f168": 90.11, "f169": 124.4, "f171": 86.02, "f172": 4.863, "f173": 141.6, "f174": 20.81, "f175": 60.53, "f176": 139.7, "f177": 56.95, "f178": 56.95, "f179": 14.3, "f180": 112.1, "f181": 9.837, "f182": 9.837, "f183": 11.98, "f184": 104.8, "f185": 7.211, "f186": 7.211, "f187": 10.62, "f188": 84.99, "f189": 4.734, "f190": 4.734, "f266": 1.47, "f267": 2.079, "f268": 6, "f269": 4, "f270": 0.2157, "f271": 2, "f272": 10, "f274": 90.11, "f275": 7.581, "f276": 124.4, "f277": 12.88, "f278": 0, "f279": 0.537, "f285": 0.4394, "f286": 0.3429, "f288": 9.837, "f289": 4.863, "f290": 20.81, "f291": 7.581, "f292": 12.88}, {"name": "Qwen3 Next 80B A3B", "creator": "Alibaba", "open_weights": true, "f3": 0.6633, "f35": 262144, "f37": 0, "f85": 0.7384, "f89": 0.07646, "f92": 0.3966, "f116": 0.5267, "f147": 0.6836, "f148": 4.817, "f149": 123.1, "f151": 0.8033, "f152": 0.8033, "f155": 3, "f171": 81.18, "f172": 0.674, "f173": 200.8, "f174": 1.328, "f271": 0.09, "f272": 1.1, "f274": 108.7, "f275": 0.753, "f276": 174.5, "f277": 1.045, "f282": 0.2164, "f287": 0.07576}, {"name": "Grok 4.7 (high)", "creator": "SpaceXAI", "open_weights": false, "f4": 0.55, "f6": 0.6352, "f7": 1916, "f8": 1901, "f9": 1933, "f10": 1629, "f11": 1620, "f12": 1639, "f13": 1509, "f14": 1492, "f15": 1525, "f16": 0.5501, "f17": 1629, "f18": 581, "f19": 0.75, "f20": 0.5, "f22": 23764215, "f23": 5726294102, "f24": 123196074, "f25": 99431859, "f26": 47.24, "f27": 41.47, "f28": 50.62, "f29": 46.36, "f30": 46.62, "f31": 53.15, "f35": 500000, "f36": 6.184, "f37": 0.18, "f38": 0.35, "f44": 40, "f78": 0.3415, "f79": 0.2778, "f81": 0.232, "f82": 1717, "f83": 1698, "f84": 1735, "f89": 0.4231, "f90": 0.236, "f91": 1, "f94": 35.01, "f95": 142.6, "f96": 2490, "f97": 1458, "f98": 3982, "f99": 34.16, "f100": 739.2, "f101": 0.1857, "f102": 3.62, "f103": 2.017, "f104": 5.649, "f105": 0.01195, "f106": 0.5348, "f107": 0.3491, "f108": 6.184, "f109": 596.6, "f110": 4722, "f111": 30940, "f112": 89130, "f113": 58180, "f114": 1012, "f116": 0.77, "f148": 22.79, "f149": 86.29, "f151": 17, "f152": 17, "f153": 0.1889, "f155": 1, "f156": 30, "f157": 0.4177, "f158": 0.2021, "f159": 0.7979, "f165": 86.29, "f166": 45.01, "f167": 129.3, "f168": 61.46, "f169": 119.6, "f171": 45.01, "f172": 6.235, "f173": 129.3, "f174": 81.7, "f175": 97.33, "f176": 111.7, "f177": 92.86, "f178": 92.86, "f179": 22.79, "f180": 86.29, "f181": 17, "f182": 17, "f183": 16.18, "f184": 78.19, "f185": 9.785, "f186": 9.785, "f187": 12.91, "f188": 53, "f189": 3.475, "f190": 3.475, "f266": 1.35, "f267": 2.04, "f268": 4, "f269": 3, "f270": 0.5686, "f271": 2, "f272": 6, "f274": 61.46, "f275": 8.948, "f276": 119.6, "f277": 44.95, "f278": 0, "f279": 0.5775, "f285": 0.2475, "f286": 0.09524, "f288": 17, "f289": 6.235, "f290": 81.7, "f291": 8.948, "f292": 44.95}, {"name": "MiniMax-M3 (MXFP8)", "creator": "MiniMax", "open_weights": true, "f0": 740.2, "f1": 707, "f2": 773, "f4": 0.1, "f6": 0.2125, "f7": 1039, "f8": 1027, "f9": 1052, "f10": 1089, "f11": 1083, "f12": 1096, "f13": 1172, "f14": 1160, "f15": 1183, "f16": 0.303, "f17": 1089, "f18": 85.5, "f19": 0.8, "f20": 0.05, "f21": 0.375, "f22": 32978293, "f23": 10351164628, "f24": 104279634, "f25": 71301341, "f26": 28.43, "f27": 26.09, "f28": 25.09, "f29": 21.67, "f30": 23.51, "f31": 27.88, "f32": 724.3, "f33": 701, "f34": 747, "f35": 1000000, "f36": 1.48, "f37": 0.03714, "f38": 0.265, "f43": 146.8, "f45": 0.3211, "f63": 6.65, "f64": 4.77, "f65": 5.18, "f66": 4.58, "f67": 6.06, "f68": 5.34, "f69": 1140, "f70": 4.37, "f71": 4.75, "f72": 6.24, "f73": 6.51, "f74": 4.66, "f75": 6.5, "f76": 6.32, "f77": 5.27, "f78": 0.23, "f79": 0.219, "f81": 0.098, "f82": 1250, "f83": 1234, "f84": 1266, "f85": 0.9293, "f86": 0, "f89": 0.3897, "f90": 0.16, "f91": 12, "f92": 0.8286, "f93": 23, "f94": 18.73, "f95": 39.57, "f96": 595.7, "f97": 152.3, "f98": 752.9, "f99": 4.862, "f100": 125.1, "f101": 0.05446, "f102": 0.9511, "f103": 0.222, "f104": 1.175, "f105": 0.002223, "f106": 0.1097, "f107": 0.05529, "f108": 1.285, "f109": 85.56, "f110": 878, "f111": 45380, "f112": 91450, "f113": 46070, "f114": 769.5, "f116": 0.83, "f117": 75, "f118": 40.66, "f119": 67.39, "f120": 69.01, "f121": 68.2, "f122": 96.33, "f123": 84.61, "f124": 76.17, "f125": 57.51, "f126": 56, "f127": 63.64, "f128": 76.84, "f129": 66, "f130": 91.18, "f131": 76.95, "f132": 85.61, "f133": 55.93, "f134": 50.17, "f135": 35, "f136": 74.48, "f137": 56.62, "f138": 94, "f139": 63.55, "f140": 53.93, "f141": 45.85, "f142": 98.04, "f143": 76.92, "f144": 23.33, "f145": 84, "f146": 61, "f148": 23.47, "f149": 113.2, "f150": 17.67, "f151": 19.05, "f152": 1.109, "f153": 0.04444, "f154": 0.7855, "f155": 11, "f156": -5.5, "f157": 0.4487, "f158": 0.9135, "f159": 0.08646, "f160": 4, "f161": 33.33, "f162": 2, "f163": 0, "f164": 0, "f165": 102.8, "f166": 71.3, "f167": 219.1, "f168": 81.94, "f169": 142.6, "f170": 428, "f171": 71.3, "f172": 0.8021, "f173": 219.1, "f174": 2.426, "f175": 26.57, "f176": 111.6, "f177": 22.09, "f178": 4.168, "f179": 25.42, "f180": 102.8, "f181": 20.56, "f182": 1.109, "f183": 24.68, "f184": 104.4, "f185": 19.9, "f186": 0.7439, "f187": 31.1, "f188": 82.33, "f189": 25.03, "f190": 0.7342, "f191": 15, "f192": 26, "f193": 37, "f194": 57, "f195": 55, "f196": 73, "f197": 21, "f198": 32, "f199": 17, "f200": 42, "f201": 54, "f202": 65, "f203": 23, "f204": 28, "f205": 71, "f206": 81, "f207": 18.32, "f208": 48.02, "f209": 62.88, "f210": 28.23, "f211": 23.28, "f212": 57.92, "f213": 25.75, "f214": 80.2, "f215": 2.63, "f216": 18.91, "f217": 11.51, "f218": 2719, "f219": 6.35, "f220": 9.192, "f221": 0.1189, "f222": 5.321, "f223": 0.5711, "f224": 0.2322, "f225": 0.1767, "f226": 3.426, "f227": 2.32, "f228": 3.201, "f229": 8.932, "f230": 4.909, "f231": 2.397, "f232": 8.082, "f233": 26.08, "f234": 0.09, "f235": 404.5, "f236": 605.4, "f237": 757.5, "f238": 826.9, "f239": 1196, "f240": 1056, "f241": 652.3, "f242": 671.2, "f243": 1178, "f244": 1044, "f245": 873.7, "f246": 801.6, "f247": 1143, "f248": 1119, "f249": 1145, "f250": 1014, "f251": 722.4, "f252": 1393, "f253": 881.4, "f254": 982.5, "f255": 848.2, "f256": 752, "f257": 891.4, "f258": 1478, "f259": 1393, "f260": 846.5, "f261": 1610, "f262": 735.9, "f263": 872, "f264": 943.1, "f265": 302.6, "f266": 0.222, "f267": 0.3089, "f268": 0.75, "f269": 0.525, "f270": 0.07353, "f271": 0.23, "f272": 0.96, "f274": 93.13, "f275": 0.9977, "f276": 148.4, "f277": 1.434, "f278": 2000, "f279": 0.4711, "f280": 45.8, "f281": 150.2, "f282": 0.8889, "f283": 0.1526, "f284": 0.6517, "f285": 0.0202, "f286": 0.004762, "f287": 0.4242, "f288": 1.109, "f289": 0.5631, "f290": 3.472, "f291": 0.6509, "f292": 1.7}, {"name": "Mistral Large 4 (medium)", "creator": "Mistral", "open_weights": true, "f6": 0.528, "f7": 1200, "f8": 1183, "f9": 1217, "f10": 1188, "f11": 1179, "f12": 1198, "f13": 1172, "f14": 1155, "f15": 1190, "f16": 0.3859, "f17": 1188, "f18": 40.18, "f19": 0.9, "f20": 0.07, "f21": 0.7, "f22": 17410587, "f23": 5133629800, "f24": 72535421, "f25": 55124834, "f26": 33, "f27": 30.81, "f28": 34.6, "f30": 31.27, "f31": 38.97, "f35": 1000000, "f36": 1.412, "f37": 0.1114, "f38": 0.22, "f44": 30, "f78": 0.3783, "f79": 0.1332, "f81": 0.168, "f90": 0.139, "f91": 1, "f93": 52, "f94": 23.08, "f95": 36.56, "f96": 312.2, "f97": 462.3, "f98": 784, "f99": 9.539, "f100": 152.3, "f101": 0.04318, "f102": 0.5333, "f103": 0.7558, "f104": 1.294, "f105": 0.004501, "f106": 0.1183, "f107": 0.0751, "f108": 1.412, "f109": 115.8, "f110": 936.4, "f111": 20560, "f112": 56320, "f113": 35760, "f155": 1, "f156": 3.267, "f157": 0.225, "f158": 0.2482, "f159": 0.7518, "f170": 1050, "f266": 0.399, "f267": 0.7139, "f268": 1.4, "f269": 1.05, "f270": 0.09608, "f271": 0.7, "f272": 2.1, "f278": 2000, "f285": 0.2323, "f286": 0.03333}, {"name": "Nemotron 3.5 Lightning (NVFP4)", "creator": "NVIDIA", "open_weights": true, "f6": 0.00841, "f7": 352.1, "f8": 332.3, "f9": 372.1, "f10": 506.9, "f11": 497.2, "f12": 516.7, "f13": 492.2, "f14": 475.4, "f15": 509.2, "f16": 0.08889, "f17": 506.9, "f18": 25.8, "f19": 0.6143, "f20": 0.035, "f22": 24914908, "f23": 3837689901, "f24": 77790023, "f25": 52875115, "f26": 14.7, "f27": 15.47, "f28": 14.89, "f29": 8.987, "f30": 14.25, "f31": 7.072, "f35": 262100, "f36": 0.3119, "f37": 0, "f38": 0.015, "f45": 0.1835, "f79": 0, "f81": 0.03, "f82": 645.7, "f83": 622, "f84": 670, "f85": 0.7434, "f89": 0.1057, "f90": 0.045, "f91": 6, "f93": 3.6, "f94": 5.535, "f95": 4.983, "f96": 26.32, "f97": 184.9, "f98": 211.5, "f99": 0.2684, "f100": 15.56, "f101": 0.006885, "f102": 0.0345, "f103": 0.2422, "f104": 0.2768, "f105": 0.0001166, "f106": 0.01301, "f107": 0.00612, "f108": 0.2898, "f109": 10.58, "f110": 227, "f111": 34420, "f112": 65030, "f113": 30600, "f114": 198.7, "f116": 0.6033, "f148": 8.361, "f149": 324.2, "f150": 6.272, "f151": 6.793, "f152": 0.5385, "f153": 0.02222, "f155": 6, "f156": -15.7, "f157": 0.1473, "f158": 0.3569, "f159": 0.6431, "f160": 6, "f161": 83.33, "f162": 6, "f163": 1.5, "f164": 1.5, "f165": 292.8, "f166": 98.57, "f167": 754.4, "f168": 262.6, "f169": 408, "f170": 31.6, "f171": 277.6, "f172": 0.4222, "f173": 353.9, "f174": 1.068, "f175": 9.82, "f176": 356.6, "f177": 8.418, "f178": 2.809, "f179": 9.09, "f180": 292.8, "f181": 7.382, "f182": 0.5505, "f183": 9.451, "f184": 276.8, "f185": 7.645, "f186": 0.4205, "f187": 10.65, "f188": 246.4, "f189": 8.617, "f190": 0.5015, "f266": 0.0565, "f267": 0.06139, "f268": 0.13, "f269": 0.095, "f270": 0.03686, "f271": 0.06, "f272": 0.16, "f274": 301.6, "f275": 0.4994, "f276": 338.8, "f277": 0.6299, "f278": 2000, "f279": 0.3206, "f283": 0.08866, "f284": 0.2434, "f285": 0.005051, "f286": 0, "f288": 0.5505, "f289": 0.4165, "f290": 1.475, "f291": 0.4807, "f292": 0.9173}, {"name": "Phi-4 Multimodal", "creator": "Microsoft", "open_weights": true, "f35": 4096, "f85": 0.3152, "f89": 0.05, "f147": 0.1312, "f154": 0.1451, "f155": 1, "f271": 0.08, "f272": 0.32}, {"name": "Qwen3.5 9B (FP8)", "creator": "Alibaba", "open_weights": true, "f6": 0.01047, "f17": 341.3, "f35": 262100, "f37": 0.002857, "f43": 139.3, "f81": 0.066, "f82": 427, "f85": 0.8061, "f89": 0.1492, "f90": 0.048, "f92": 0.6673, "f116": 0.7, "f148": 49.38, "f149": 59.3, "f150": 38.26, "f151": 39.81, "f152": 1.55, "f154": 0.6925, "f155": 2, "f171": 39.31, "f172": 1.204, "f173": 81.31, "f174": 6.464, "f271": 0.1, "f272": 0.15, "f274": 46.6, "f275": 1.369, "f276": 67.84, "f277": 1.703, "f279": 0.2951, "f282": 0.8684, "f283": 0.0701, "f284": 0.2921, "f285": 0.005051, "f287": 0.2424}, {"name": "NVIDIA Nemotron Nano 9B V2 (non-reasoning)", "creator": "NVIDIA", "open_weights": true, "f3": 0.6233, "f35": 131100, "f37": 0, "f85": 0.5566, "f89": 0.04588, "f92": 0.2714, "f116": 0.24, "f147": 0.7005, "f148": 3.534, "f149": 183.1, "f151": 0.7869, "f152": 0.7869, "f155": 2, "f171": 108.1, "f172": 0.7012, "f173": 280.2, "f174": 1.437, "f271": 0.04, "f272": 0.16, "f274": 131.9, "f275": 0.7367, "f276": 207.3, "f277": 0.9532, "f282": 0.2339, "f287": 0.007576}, {"name": "Command A+", "creator": "Cohere", "open_weights": true, "f6": 0.0181, "f7": 53.86, "f8": 33.65, "f9": 71.64, "f10": 356.2, "f11": 346.5, "f12": 365.1, "f13": 386.4, "f14": 367.6, "f15": 403.9, "f16": 0.06918, "f17": 356.2, "f18": 0, "f22": 12192846, "f23": 2892369864, "f24": 53860327, "f25": 41667481, "f26": 16.61, "f27": 16.38, "f28": 16.96, "f29": 10.69, "f30": 15.88, "f31": 7.435, "f35": 200000, "f36": 0, "f37": 0.002857, "f38": 0.025, "f78": 0.01212, "f79": 0, "f81": 0.01, "f82": 522.2, "f83": 500, "f84": 544, "f85": 0.7606, "f89": 0.1196, "f90": 0.051, "f91": 1, "f92": 0.7395, "f93": 25, "f94": 6.241, "f95": 0, "f96": 0, "f97": 0, "f98": 0, "f99": 0, "f100": 0, "f101": 0, "f102": 0, "f103": 0, "f104": 0, "f105": 0, "f106": 0, "f107": 0, "f108": 0, "f109": 0, "f110": 0, "f111": 15180, "f112": 35630, "f113": 20450, "f114": 209.8, "f116": 0.5267, "f148": 16.3, "f149": 158.2, "f150": 12.64, "f151": 13.14, "f152": 0.4976, "f153": 0.01667, "f154": 0.6324, "f155": 1, "f156": -2.667, "f157": 0.09833, "f158": 0.1386, "f159": 0.8614, "f160": 6, "f161": 38.89, "f162": 1, "f163": 0, "f164": 0, "f165": 158.2, "f166": 94.69, "f167": 263.4, "f168": 131.5, "f169": 203.3, "f170": 218, "f171": 94.69, "f172": 0.4241, "f173": 263.4, "f174": 0.9134, "f175": 14.76, "f176": 224.8, "f177": 12.54, "f178": 3.644, "f179": 16.3, "f180": 158.2, "f181": 13.14, "f182": 0.4976, "f183": 17.33, "f184": 146, "f185": 13.9, "f186": 0.2015, "f187": 19.04, "f188": 132.8, "f189": 15.27, "f190": 0.2119, "f266": 0, "f267": 0, "f268": 0, "f269": 0, "f270": 0, "f271": 0, "f272": 0, "f274": 131.5, "f275": 0.4709, "f276": 203.3, "f277": 0.5261, "f278": 2000, "f279": 0.3854, "f282": 0.807, "f283": 0.05979, "f284": 0.2285, "f285": 0.005051, "f286": 0, "f287": 0.25, "f288": 0.4976, "f289": 0.4241, "f290": 0.9134, "f291": 0.4709, "f292": 0.5261}, {"name": "GPT-6 Astra (max)", "creator": "OpenAI", "open_weights": false, "f0": 1164, "f1": 1132, "f2": 1196, "f4": 0.5125, "f6": 0.6849, "f7": 1752, "f8": 1737, "f9": 1769, "f10": 1568, "f11": 1560, "f12": 1577, "f13": 1553, "f14": 1538, "f15": 1570, "f16": 0.5202, "f17": 1568, "f18": 864.7, "f19": 0.9, "f20": 0.5, "f21": 6.25, "f22": 15453718, "f23": 1680916109, "f24": 54327859, "f25": 38874141, "f26": 58.32, "f27": 61.79, "f28": 57.38, "f29": 53.73, "f30": 55.57, "f31": 57.98, "f32": 1427, "f33": 1403, "f34": 1451, "f35": 1000000, "f36": 3.122, "f37": 0.3171, "f38": 0.705, "f40": 7.498, "f41": 73.23, "f42": 79.65, "f43": 168.9, "f44": 60, "f78": 0.4698, "f79": 0.4237, "f80": 82.93, "f81": 0.31, "f82": 1584, "f83": 1565, "f84": 1604, "f85": 0.9606, "f86": 0.08611, "f87": 0.5822, "f88": 0.6598, "f89": 0.5468, "f90": 0.638, "f91": 11, "f94": 56.85, "f95": 772.7, "f96": 1567, "f97": 1206, "f98": 2945, "f99": 171.5, "f100": 2716, "f101": 0.8107, "f102": 2.175, "f103": 1.39, "f104": 3.646, "f105": 0.0815, "f106": 2.599, "f107": 1.788, "f108": 6.245, "f109": 1944, "f110": 5661, "f111": 16210, "f112": 51970, "f113": 35760, "f114": 667, "f115": 0.4859, "f116": 0.8067, "f148": 243.4, "f149": 77.06, "f151": 236.9, "f152": 236.9, "f153": 0.4167, "f154": 0.8688, "f155": 3, "f156": 42.43, "f157": 0.6157, "f158": 0.4978, "f159": 0.5022, "f165": 76.49, "f166": 40.49, "f167": 100.4, "f168": 54.5, "f169": 90.75, "f171": 48.95, "f172": 83.82, "f173": 101, "f174": 423.1, "f175": 195.3, "f176": 74.07, "f177": 188.5, "f178": 188.5, "f179": 237.5, "f180": 76.49, "f181": 231, "f182": 231, "f183": 221.9, "f184": 80.98, "f185": 215.8, "f186": 215.8, "f187": 204.2, "f188": 56.43, "f189": 195.3, "f190": 195.3, "f191": 32, "f192": 50, "f193": 45, "f194": 61, "f195": 60, "f196": 75, "f197": 17, "f198": 23, "f199": 53, "f200": 74, "f201": 10, "f202": 15, "f203": 87, "f204": 97, "f205": 67, "f206": 80, "f207": 40.6, "f208": 52.98, "f209": 72.77, "f210": 20.8, "f211": 65.35, "f212": 13.38, "f213": 95.05, "f214": 72.77, "f215": 1.329, "f216": 12.6, "f217": 8.837, "f218": 2413, "f219": 5.2, "f220": 6.246, "f221": 0.04889, "f222": 3.19, "f223": 0.002222, "f224": 0.3233, "f225": 0.04111, "f226": 1.993, "f227": 0.5233, "f228": 1.458, "f229": 9.757, "f230": 0.2778, "f231": 2.484, "f232": 5.994, "f233": 28.44, "f234": 0.1656, "f235": 351.9, "f236": 1009, "f237": 941.5, "f238": 947.5, "f239": 1010, "f240": 1036, "f241": 936.9, "f242": 975.9, "f243": 1060, "f244": 1052, "f245": 1040, "f246": 1023, "f247": 1004, "f248": 1085, "f249": 991.9, "f250": 1042, "f251": 993.4, "f252": 1022, "f253": 1041, "f254": 1039, "f255": 990.1, "f256": 1062, "f257": 1050, "f258": 1000, "f259": 960.1, "f260": 1085, "f261": 1006, "f262": 1017, "f263": 955.8, "f264": 985, "f265": 1039, "f266": 7.7, "f267": 10.4, "f268": 30, "f269": 20, "f270": 1.569, "f271": 5, "f272": 25, "f274": 57.67, "f275": 107.9, "f276": 89.62, "f277": 332.2, "f278": 0, "f279": 0.5648, "f280": 83.6, "f281": 167.7, "f283": 0.4144, "f284": 0.8839, "f285": 0.5909, "f286": 0.6333, "f288": 231, "f289": 90.93, "f290": 466.5, "f291": 114.6, "f292": 325.3}, {"name": "Claude Opus 5.5 (max with fallback)", "creator": "Anthropic", "open_weights": false, "f0": 1196, "f1": 1164, "f2": 1229, "f4": 0.5625, "f6": 0.6954, "f7": 2135, "f8": 2112, "f9": 2161, "f10": 1800, "f11": 1790, "f12": 1812, "f13": 1715, "f14": 1696, "f15": 1737, "f16": 0.6121, "f17": 1800, "f18": 1915, "f19": 0.95, "f20": 0.2, "f21": 5, "f22": 44781898, "f23": 15580179708, "f24": 218145408, "f25": 173363510, "f26": 62.33, "f27": 64.58, "f28": 59.4, "f29": 57.92, "f30": 58.04, "f31": 61.44, "f32": 1536, "f33": 1510, "f34": 1561, "f35": 1000000, "f36": 10.04, "f37": 0.3171, "f38": 0.61, "f39": 57.8, "f43": 168.6, "f44": 60, "f63": 7.39, "f64": 9.57, "f65": 8.84, "f66": 10, "f67": 5.47, "f68": 7.12, "f69": 1340, "f70": 9.98, "f71": 8.47, "f72": 7.57, "f73": 6.57, "f74": 10, "f75": 7.42, "f76": 6.95, "f77": 4.95, "f78": 0.5217, "f79": 0.4644, "f80": 95, "f81": 0.262, "f82": 1866, "f83": 1840, "f84": 1892, "f86": 0.04167, "f87": 0.5699, "f88": 0.5988, "f89": 0.6135, "f90": 0.679, "f91": 9, "f94": 58.41, "f95": 895.6, "f96": 3056, "f97": 1416, "f98": 4547, "f99": 75.41, "f100": 4363, "f101": 1.057, "f102": 4.738, "f103": 1.796, "f104": 6.57, "f105": 0.03568, "f106": 3.466, "f107": 2.409, "f108": 10.04, "f109": 3467, "f110": 8910, "f111": 52850, "f112": 173300, "f113": 120500, "f114": 1153, "f115": 0.3823, "f116": 0.8467, "f148": 656.6, "f149": 96.75, "f151": 651.4, "f152": 651.4, "f153": 0.2778, "f154": 0.8769, "f155": 4, "f156": 48.13, "f157": 0.655, "f158": 0.5034, "f159": 0.4966, "f165": 96.57, "f166": 89.6, "f167": 100.8, "f168": 92.75, "f169": 99.65, "f171": 90.6, "f172": 257.1, "f173": 103.5, "f174": 953.2, "f175": 533.7, "f176": 99.17, "f177": 528.6, "f178": 528.6, "f179": 637.9, "f180": 96.57, "f181": 632.8, "f182": 632.8, "f183": 580.7, "f184": 96.45, "f185": 575.6, "f186": 575.6, "f187": 437.8, "f188": 92.88, "f189": 432.4, "f190": 432.4, "f191": 61, "f192": 79, "f193": 88, "f194": 92, "f195": 88, "f196": 96, "f197": 92, "f198": 98, "f199": 66, "f200": 93, "f201": 15, "f202": 22, "f203": 83, "f204": 96, "f205": 82, "f206": 88, "f207": 70.3, "f208": 90.1, "f209": 95.05, "f210": 92.58, "f211": 75.25, "f212": 18.32, "f213": 90.1, "f214": 82.67, "f215": 3.396, "f216": 13.41, "f217": 11.84, "f218": 3579, "f219": 7.442, "f220": 12.37, "f221": 0.1033, "f222": 0.02222, "f223": 0.007778, "f224": 0.04, "f225": 0.1089, "f226": 1.779, "f227": 2.511, "f228": 2.922, "f229": 9.26, "f230": 4.362, "f231": 2.009, "f232": 10.07, "f233": 43.73, "f234": 0.1, "f235": 570.6, "f236": 895.3, "f237": 958.4, "f238": 1107, "f239": 1275, "f240": 1529, "f241": 782.5, "f242": 892.1, "f243": 1290, "f244": 1095, "f245": 1735, "f246": 1140, "f247": 1074, "f248": 1353, "f249": 1876, "f250": 1666, "f251": 1060, "f252": 1480, "f253": 1080, "f254": 933.2, "f255": 1135, "f256": 1238, "f257": 1249, "f258": 1647, "f259": 1196, "f260": 1206, "f261": 1075, "f262": 999.2, "f263": 934.5, "f264": 989, "f265": 1077, "f266": 2.94, "f267": 4.158, "f268": 12, "f269": 8, "f270": 0.4314, "f271": 4, "f272": 20, "f274": 93.81, "f275": 333.7, "f276": 99.79, "f277": 790.6, "f278": 0, "f279": 0.669, "f280": 88.4, "f281": 169.4, "f285": 0.596, "f286": 0.5905, "f288": 632.8, "f289": 234.2, "f290": 924, "f291": 326, "f292": 837.2}, {"name": "Qwen3.5 4B (non-reasoning) FP8", "creator": "Alibaba", "open_weights": true, "f35": 262144, "f37": 0, "f85": 0.7121, "f89": 0.0797, "f92": 0.3327, "f116": 0.3467, "f148": 34.16, "f149": 15.13, "f151": 1.111, "f152": 1.111, "f154": 0.6208, "f155": 1, "f171": 7.618, "f172": 0.7151, "f173": 50.03, "f174": 49.98, "f271": 0.03, "f272": 0.15, "f274": 10.35, "f275": 0.8883, "f276": 29.31, "f277": 2.799, "f282": 0.8772, "f283": 0.0433, "f284": 0.2135, "f287": 0.1136}, {"name": "Qwen3.5 397B A17B (non-reasoning) (FP8)", "creator": "Alibaba", "open_weights": true, "f20": 0.22, "f35": 262144, "f37": 0.008571, "f46": 16.81, "f47": 13.65, "f48": 11.23, "f49": 12.12, "f50": 9.42, "f51": 14.35, "f52": 15.87, "f53": 15, "f54": 12.27, "f55": 12.23, "f56": 9.85, "f57": 14, "f58": 10.92, "f59": 12.88, "f60": 12.69, "f61": 13.58, "f62": 13, "f85": 0.8606, "f89": 0.1983, "f92": 0.5163, "f116": 0.6433, "f148": 10.66, "f149": 59.92, "f151": 1.613, "f152": 1.613, "f154": 0.5266, "f155": 5, "f171": 52.18, "f172": 1.405, "f173": 61.15, "f174": 2.65, "f271": 0.45, "f272": 3, "f274": 58.4, "f275": 1.576, "f276": 60.67, "f277": 1.704, "f282": 0.8392, "f287": 0.3561}, {"name": "Nova Micro", "creator": "Amazon", "open_weights": false, "f3": 0.06, "f20": 0.00875, "f35": 130000, "f37": 0, "f85": 0.3576, "f89": 0.04634, "f92": 0.2939, "f116": 0.13, "f147": 0.1397, "f148": 2.513, "f149": 294, "f151": 0.8123, "f152": 0.8123, "f155": 1, "f171": 233, "f172": 0.7487, "f173": 355, "f174": 1.46, "f271": 0.035, "f272": 0.14, "f274": 247.7, "f275": 0.7862, "f276": 330.2, "f277": 0.8276, "f282": 0.1404, "f287": 0.01515}, {"name": "Qwen3.8 27B (non-reasoning)", "creator": "Alibaba", "open_weights": true, "f6": 0.1243, "f17": 900.6, "f35": 262100, "f37": 0.002857, "f38": 0.02, "f78": 0.0787, "f81": 0.052, "f82": 1082, "f85": 0.8182, "f89": 0.1214, "f90": 0.042, "f116": 0.6933, "f148": 4.013, "f149": 157, "f151": 1.033, "f152": 1.033, "f153": 0.1, "f154": 0.6994, "f155": 6, "f156": -7.267, "f157": 0.091, "f159": 0.8199, "f171": 89.24, "f172": 0.9379, "f173": 262.5, "f174": 1.786, "f271": 0, "f272": 0, "f274": 118.3, "f275": 0.9629, "f276": 215.3, "f277": 1.173, "f279": 0.3623, "f283": 0.2, "f284": 0.4906, "f285": 0, "f286": 0}, {"name": "Muse Spark Open (xhigh)", "creator": "Meta", "open_weights": true, "f6": 0.4971, "f7": 1252, "f8": 1233, "f9": 1272, "f10": 1278, "f11": 1267, "f12": 1289, "f13": 1303, "f14": 1284, "f15": 1321, "f16": 0.4566, "f17": 1278, "f18": 133.4, "f19": 0.88, "f20": 0.15, "f22": 30698631, "f23": 5720230010, "f24": 90571147, "f25": 59872516, "f26": 40.58, "f27": 34.9, "f28": 42.04, "f29": 39.1, "f30": 39.57, "f31": 43.39, "f35": 1048576, "f36": 2.018, "f37": 0.1486, "f38": 0.275, "f43": 154.9, "f44": 50, "f78": 0.2765, "f79": 0.07604, "f80": 31.71, "f81": 0.186, "f82": 1401, "f83": 1382, "f84": 1420, "f85": 0.8899, "f89": 0.4388, "f90": 0.263, "f91": 6, "f93": 42, "f94": 24.68, "f95": 130.5, "f96": 796.1, "f97": 498.7, "f98": 1312, "f99": 17.47, "f100": 384.9, "f101": 0.1451, "f102": 1.096, "f103": 0.6316, "f104": 1.735, "f105": 0.007958, "f106": 0.2824, "f107": 0.1373, "f108": 2.018, "f109": 254.5, "f110": 1697, "f111": 34140, "f112": 66440, "f113": 32300, "f114": 478.9, "f116": 0.7833, "f148": 20.9, "f149": 123.5, "f150": 16.19, "f151": 16.86, "f152": 0.6689, "f153": 0.07778, "f154": 0.8092, "f155": 5, "f156": 25.8, "f157": 0.4203, "f158": 0.28, "f159": 0.72, "f160": 4, "f161": 27.78, "f162": 1, "f163": 0, "f164": 0, "f165": 139.6, "f166": 59.18, "f167": 432.8, "f168": 98.39, "f169": 250, "f170": 816, "f171": 74.93, "f172": 0.5515, "f173": 303.7, "f174": 1.877, "f175": 13.14, "f176": 245.4, "f177": 11.1, "f178": 2.953, "f179": 18.63, "f180": 139.6, "f181": 15.05, "f182": 0.724, "f183": 18.16, "f184": 141.4, "f185": 14.62, "f186": 0.4753, "f187": 23.15, "f188": 111, "f189": 18.64, "f190": 0.6339, "f191": 17, "f192": 30, "f193": 39, "f194": 61, "f195": 97, "f196": 100, "f197": 84, "f198": 91, "f199": 18, "f200": 45, "f201": 82, "f202": 90, "f203": 43, "f204": 59, "f205": 83, "f206": 94, "f207": 23.28, "f208": 50.5, "f209": 97.52, "f210": 90.1, "f211": 28.23, "f212": 87.62, "f213": 50.5, "f214": 87.62, "f215": 6.032, "f216": 13.77, "f217": 12.52, "f218": 5050, "f219": 19.04, "f220": 19.27, "f221": 0.3611, "f222": 5.558, "f223": 0.007778, "f224": 0.2644, "f225": 0.3344, "f226": 4.301, "f227": 5.406, "f228": 4.384, "f229": 22.53, "f230": 3.321, "f231": 8.371, "f232": 15.06, "f233": 63.21, "f234": 0.05222, "f235": 808.6, "f236": 658.2, "f237": 823.7, "f238": 895.6, "f239": 1260, "f240": 1353, "f241": 311, "f242": 967, "f243": 1164, "f244": 1116, "f245": 1089, "f246": 1129, "f247": 1458, "f248": 1338, "f249": 1410, "f250": 1200, "f251": 461.4, "f252": 1747, "f253": 826.6, "f254": 1232, "f255": 1119, "f256": 1079, "f257": 1592, "f258": 1815, "f259": 1093, "f260": 536.7, "f261": 1835, "f262": 752, "f263": 980.5, "f264": 1216, "f265": 529, "f266": 0.78, "f267": 1.28, "f268": 2.75, "f269": 2, "f270": 0.201, "f271": 1.25, "f272": 4.25, "f274": 106.5, "f275": 0.6307, "f276": 184.2, "f277": 0.7931, "f278": 2000, "f279": 0.5845, "f284": 0.764, "f285": 0.08081, "f286": 0.01905, "f288": 0.724, "f289": 0.23, "f290": 3.054, "f291": 0.5996, "f292": 1.222}, {"name": "GPT-6 Luna (medium)", "creator": "OpenAI", "open_weights": false, "f6": 0.4046, "f7": 1062, "f8": 1044, "f9": 1077, "f10": 1097, "f11": 1088, "f12": 1105, "f13": 1190, "f14": 1176, "f15": 1205, "f16": 0.2808, "f17": 1097, "f18": 3.014, "f19": 0.9, "f20": 0.01, "f21": 0.125, "f22": 10152207, "f23": 1778722031, "f24": 24887351, "f25": 14735144, "f26": 27.5, "f27": 24.78, "f28": 26.28, "f29": 27.4, "f30": 24.46, "f31": 33.76, "f35": 1000000, "f36": 0.0422, "f37": 0.1057, "f38": 0.26, "f44": 30, "f78": 0.3181, "f79": 0.1277, "f81": 0.138, "f82": 1271, "f83": 1250, "f84": 1292, "f89": 0.2827, "f90": 0.151, "f91": 1, "f94": 18.3, "f95": 5.076, "f96": 16.94, "f97": 8.452, "f98": 27.11, "f99": 1.715, "f100": 12.44, "f101": 0.00439, "f102": 0.02361, "f103": 0.00787, "f104": 0.03229, "f105": 0.000815, "f106": 0.009912, "f107": 0.005521, "f108": 0.0422, "f109": 7.368, "f110": 39.55, "f111": 8781, "f112": 19820, "f113": 11040, "f116": 0.7833, "f153": 0.1833, "f154": 0.7786, "f155": 1, "f156": -13.57, "f157": 0.387, "f158": 0.8526, "f159": 0.1474, "f175": 16.35, "f176": 70.07, "f177": 9.214, "f178": 9.214, "f266": 0.077, "f267": 0.104, "f268": 0.3, "f269": 0.2, "f270": 0.01569, "f271": 0.1, "f272": 0.5, "f278": 0, "f279": 0.5093, "f285": 0.02525, "f286": 0.01429}, {"name": "gpt-oss-20b (high)", "creator": "OpenAI", "open_weights": true, "f3": 0.8933, "f5": 0.007375, "f6": 0.001911, "f17": 0, "f35": 131100, "f37": 0.01429, "f43": 137.7, "f46": 14.81, "f47": 8.58, "f48": 5.31, "f49": 12.69, "f50": 5.46, "f51": 8.5, "f52": 9.76, "f53": 8.67, "f54": 5.81, "f55": 5.58, "f56": 8.65, "f57": 7.62, "f58": 7.92, "f59": 10.62, "f60": 6.31, "f61": 10.31, "f62": 9.19, "f81": 0.02, "f82": 347.6, "f85": 0.6879, "f89": 0.1098, "f90": 0.048, "f92": 0.651, "f116": 0.3467, "f147": 0.7767, "f148": 20.75, "f149": 177.4, "f150": 12.41, "f151": 16.71, "f152": 0.6498, "f153": 0.01111, "f155": 4, "f171": 80.14, "f172": 0.5095, "f173": 280.9, "f174": 3.454, "f271": 0.03, "f272": 0.13, "f274": 139.5, "f275": 0.6169, "f276": 203.1, "f277": 0.8437, "f279": 0.3889, "f281": 136.7, "f282": 0.6023, "f283": 0.0701, "f284": 0.1386, "f285": 0, "f287": 0.1061}, {"name": "Claude Fable 5.1 (medium with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.5466, "f7": 1761, "f8": 1745, "f9": 1776, "f10": 1524, "f11": 1516, "f12": 1532, "f13": 1340, "f14": 1326, "f15": 1354, "f16": 0.5606, "f17": 1524, "f18": 780.8, "f19": 0.975, "f20": 0.25, "f21": 12.5, "f22": 25779979, "f23": 3640557177, "f24": 49158531, "f25": 23378552, "f26": 51, "f27": 50.05, "f28": 47.47, "f29": 45.31, "f30": 48.08, "f31": 52.31, "f35": 1000000, "f36": 5.564, "f37": 0.2914, "f38": 0.565, "f44": 30, "f79": 0.2877, "f81": 0.268, "f82": 1555, "f83": 1537, "f84": 1573, "f85": 0.8859, "f89": 0.538, "f90": 0.45, "f91": 1, "f94": 42.97, "f95": 1278, "f96": 897.1, "f97": 1393, "f98": 2475, "f99": 184.6, "f100": 2422, "f101": 1.297, "f102": 1.467, "f103": 1.615, "f104": 3.17, "f105": 0.08761, "f106": 2.394, "f107": 1.098, "f108": 5.564, "f109": 1144, "f110": 4897, "f111": 26170, "f112": 48550, "f113": 22370, "f114": 509.9, "f116": 0.8467, "f148": 11, "f149": 57.84, "f151": 2.352, "f152": 2.352, "f153": 0.09444, "f155": 1, "f156": 36.43, "f157": 0.6257, "f158": 0.6981, "f159": 0.3019, "f165": 57.84, "f166": 42.14, "f167": 73.64, "f168": 48.44, "f169": 69.6, "f171": 42.14, "f172": 0.9241, "f173": 73.64, "f174": 20.32, "f175": 37.64, "f176": 75.37, "f177": 31, "f178": 31, "f179": 11, "f180": 57.84, "f181": 2.352, "f182": 2.352, "f183": 12.42, "f184": 55.33, "f185": 3.38, "f186": 3.38, "f187": 14.41, "f188": 40.32, "f189": 2.015, "f190": 2.015, "f266": 7.175, "f267": 10.4, "f268": 30, "f269": 20, "f270": 0.8333, "f271": 10, "f272": 50, "f274": 48.44, "f275": 1.504, "f276": 69.6, "f277": 11.03, "f278": 0, "f279": 0.5637, "f283": 0.4103, "f284": 0.8801, "f285": 0.4495, "f286": 0.2905, "f288": 2.352, "f289": 0.9241, "f290": 20.32, "f291": 1.504, "f292": 11.03}, {"name": "GPT-6.1 Sol (high)", "creator": "OpenAI", "open_weights": false, "f6": 0.645, "f7": 1649, "f8": 1630, "f9": 1667, "f10": 1466, "f11": 1456, "f12": 1476, "f13": 1382, "f14": 1365, "f15": 1402, "f16": 0.4909, "f17": 1466, "f18": 76.16, "f19": 0.95, "f20": 0.1, "f21": 2.5, "f22": 12737195, "f23": 1286467546, "f24": 24651130, "f25": 11913935, "f26": 53.67, "f27": 55.28, "f28": 53.18, "f29": 48.81, "f30": 51.77, "f31": 55.44, "f35": 1000000, "f36": 0.591, "f37": 0.3, "f38": 0.675, "f44": 40, "f78": 0.4661, "f79": 0.3674, "f81": 0.32, "f82": 1521, "f83": 1500, "f84": 1542, "f89": 0.5139, "f90": 0.519, "f91": 1, "f94": 50.23, "f95": 127.4, "f96": 120, "f97": 172.3, "f98": 326.7, "f99": 34.3, "f100": 246.5, "f101": 0.1247, "f102": 0.1692, "f103": 0.1794, "f104": 0.3649, "f105": 0.0163, "f106": 0.2261, "f107": 0.1014, "f108": 0.591, "f109": 119.1, "f110": 573.2, "f111": 12470, "f112": 22610, "f113": 10140, "f114": 349.1, "f116": 0.8233, "f148": 33.4, "f149": 65.43, "f151": 25.76, "f152": 25.76, "f153": 0.3167, "f154": 0.8491, "f155": 1, "f156": 41, "f157": 0.604, "f158": 0.4899, "f159": 0.5101, "f165": 65.43, "f166": 37.54, "f167": 102.3, "f168": 47.88, "f169": 76.24, "f171": 37.54, "f172": 10.52, "f173": 102.3, "f174": 118.8, "f175": 123.6, "f176": 80.28, "f177": 117.4, "f178": 117.4, "f179": 33.4, "f180": 65.43, "f181": 25.76, "f182": 25.76, "f183": 39.85, "f184": 67.75, "f185": 32.47, "f186": 32.47, "f187": 31.05, "f188": 43.05, "f189": 19.44, "f190": 19.44, "f266": 1.47, "f267": 2.079, "f268": 6, "f269": 4, "f270": 0.2157, "f271": 2, "f272": 10, "f274": 47.88, "f275": 14.84, "f276": 76.24, "f277": 50.96, "f278": 0, "f279": 0.5579, "f285": 0.5152, "f286": 0.4619, "f288": 25.76, "f289": 10.52, "f290": 118.8, "f291": 14.84, "f292": 50.96}, {"name": "Command A", "creator": "Cohere", "open_weights": true, "f3": 0.13, "f35": 272000, "f37": 0, "f85": 0.5273, "f89": 0.04032, "f92": 0.3646, "f116": 0.2133, "f147": 0.2868, "f148": 22.93, "f149": 29.72, "f151": 2.752, "f152": 2.752, "f155": 2, "f171": 6.799, "f172": 2.225, "f173": 47.93, "f174": 131.7, "f271": 2.5, "f272": 10, "f274": 20.17, "f275": 2.331, "f276": 37.18, "f277": 7.521, "f282": 0.152, "f287": 0.007576}, {"name": "Claude Fable 5.1 (max with fallback)", "creator": "Anthropic", "open_weights": false, "f0": 1135, "f1": 1103, "f2": 1167, "f4": 0.575, "f6": 0.5938, "f7": 1958, "f8": 1943, "f9": 1975, "f10": 1669, "f11": 1661, "f12": 1679, "f13": 1493, "f14": 1479, "f15": 1508, "f16": 0.6152, "f17": 1669, "f18": 2067, "f19": 0.975, "f20": 0.25, "f21": 12.5, "f22": 40749107, "f23": 9461250929, "f24": 163073497, "f25": 122324390, "f26": 58.93, "f27": 56.59, "f28": 53.82, "f29": 51.17, "f30": 54.5, "f31": 57.97, "f32": 1325, "f33": 1302, "f34": 1347, "f35": 1000000, "f36": 12.99, "f37": 0.2971, "f38": 0.51, "f39": 51.8, "f43": 166.2, "f44": 60, "f78": 0.4897, "f79": 0.3162, "f80": 87.8, "f81": 0.262, "f82": 1764, "f83": 1745, "f84": 1782, "f85": 0.9374, "f86": 0.06389, "f87": 0.5722, "f88": 0.5775, "f89": 0.5913, "f90": 0.601, "f91": 6, "f94": 49.01, "f95": 2013, "f96": 2368, "f97": 2722, "f98": 5275, "f99": 185, "f100": 8052, "f101": 2.291, "f102": 3.702, "f103": 3.425, "f104": 7.215, "f105": 0.08806, "f106": 5.779, "f107": 3.488, "f108": 12.99, "f109": 6039, "f110": 13330, "f111": 46550, "f112": 117900, "f113": 71390, "f114": 1124, "f115": 0.4953, "f116": 0.8533, "f148": 185.4, "f149": 66.42, "f151": 177.9, "f152": 177.9, "f153": 0.1556, "f155": 1, "f156": 46.27, "f157": 0.684, "f158": 0.7004, "f159": 0.2996, "f165": 66.42, "f166": 51.74, "f167": 76.13, "f168": 62.39, "f169": 70.61, "f171": 51.74, "f172": 70.21, "f173": 76.13, "f174": 342.6, "f175": 198.6, "f176": 70.67, "f177": 191.5, "f178": 191.5, "f179": 185.4, "f180": 66.42, "f181": 177.9, "f182": 177.9, "f183": 187.3, "f184": 67.85, "f185": 179.9, "f186": 179.9, "f187": 201, "f188": 68.19, "f189": 193.6, "f190": 193.6, "f191": 98, "f192": 100, "f193": 98, "f194": 100, "f195": 76, "f196": 91, "f197": 93, "f198": 100, "f199": 41, "f200": 66, "f201": 21, "f202": 25, "f203": 95, "f204": 100, "f205": 94, "f206": 100, "f207": 100, "f208": 100, "f209": 80.2, "f210": 97.52, "f211": 52.98, "f212": 23.28, "f213": 97.52, "f214": 97.52, "f215": 3.748, "f216": 14.75, "f217": 8.673, "f218": 3646, "f219": 7.115, "f220": 14.77, "f221": 0.08241, "f222": 6.411, "f223": 0.01893, "f224": 0.05234, "f225": 0.07238, "f226": 1.432, "f227": 3.575, "f228": 1.733, "f229": 9.651, "f230": 6.13, "f231": 1.79, "f232": 11.48, "f233": 40.03, "f234": 0.05345, "f235": 575.6, "f236": 876.5, "f237": 872, "f238": 1263, "f239": 1552, "f240": 1562, "f241": 768.8, "f242": 879.1, "f243": 1716, "f244": 1240, "f245": 1790, "f246": 1195, "f247": 1049, "f248": 1390, "f249": 1925, "f250": 1868, "f251": 1053, "f252": 1519, "f253": 1461, "f254": 821.2, "f255": 1393, "f256": 1366, "f257": 1179, "f258": 1682, "f259": 1034, "f260": 1609, "f261": 1120, "f262": 922.1, "f263": 964.6, "f264": 732, "f265": 1034, "f266": 7.175, "f267": 10.4, "f268": 30, "f269": 20, "f270": 0.8333, "f271": 10, "f272": 50, "f273": 13.05, "f274": 62.39, "f275": 106.5, "f276": 70.61, "f277": 268.8, "f278": 0, "f279": 0.6308, "f280": 86.6, "f281": 167.9, "f283": 0.4722, "f284": 0.9139, "f285": 0.5202, "f286": 0.4333, "f288": 177.9, "f289": 70.21, "f290": 342.6, "f291": 106.5, "f292": 268.8}, {"name": "Mistral Small 4", "creator": "Mistral", "open_weights": true, "f4": 0.0125, "f6": 0.009635, "f7": 0, "f8": 0, "f9": 0, "f10": 241.5, "f11": 230.6, "f12": 252.2, "f13": 172.7, "f14": 152.4, "f15": 193.9, "f16": 0.05657, "f17": 241.5, "f18": 1.984, "f19": 0.9, "f20": 0.015, "f22": 8021837, "f23": 963347163, "f24": 23863423, "f25": 15841586, "f26": 11.67, "f27": 13.28, "f28": 11.55, "f29": 8.76, "f30": 11.6, "f31": 6.77, "f35": 256000, "f36": 0.03991, "f37": 0.002857, "f38": 0, "f79": 0, "f81": 0, "f82": 369.7, "f83": 347, "f84": 392, "f85": 0.7687, "f89": 0.0987, "f90": 0.044, "f91": 1, "f92": 0.4816, "f93": 6.5, "f94": 4.297, "f95": 4.813, "f96": 12.82, "f97": 15.96, "f98": 29.11, "f99": 0.332, "f100": 14.32, "f101": 0.006149, "f102": 0.01467, "f103": 0.01649, "f104": 0.03127, "f105": 0.0001061, "f106": 0.00864, "f107": 0.002491, "f108": 0.03991, "f109": 9.505, "f110": 43.43, "f111": 10250, "f112": 14400, "f113": 4152, "f114": 74.86, "f116": 0.4967, "f148": 15.01, "f149": 177.2, "f150": 11.28, "f151": 12.19, "f152": 0.901, "f153": 0.01667, "f154": 0.5682, "f155": 1, "f156": -30.97, "f157": 0.2137, "f158": 0.6655, "f159": 0.3345, "f160": 6, "f161": 38.89, "f162": 1, "f163": 0, "f164": 0, "f165": 177.2, "f166": 127.4, "f167": 222, "f168": 146.5, "f169": 192, "f170": 119, "f171": 127.4, "f172": 0.6925, "f173": 222, "f174": 3.527, "f175": 18.77, "f176": 195.4, "f177": 16.21, "f178": 5.975, "f179": 15.01, "f180": 177.2, "f181": 12.19, "f182": 0.901, "f183": 15.2, "f184": 171.8, "f185": 12.28, "f186": 0.6403, "f187": 16.74, "f188": 155.6, "f189": 13.53, "f190": 0.6743, "f266": 0.1005, "f267": 0.1545, "f268": 0.375, "f269": 0.2625, "f270": 0.02206, "f271": 0.15, "f272": 0.6, "f273": 0.2, "f274": 146.5, "f275": 0.8, "f276": 192, "f277": 1.118, "f278": 2000, "f279": 0.3877, "f282": 0.4123, "f283": 0.04948, "f284": 0.2097, "f285": 0, "f286": 0, "f287": 0.1742, "f288": 0.901, "f289": 0.6925, "f290": 3.527, "f291": 0.8, "f292": 1.118}, {"name": "Claude Haiku 5.5 (xhigh)", "creator": "Anthropic", "open_weights": false, "f6": 0.3595, "f7": 1795, "f8": 1775, "f9": 1815, "f10": 1524, "f11": 1514, "f12": 1536, "f13": 1391, "f14": 1373, "f15": 1409, "f16": 0.5141, "f17": 1524, "f18": 33.29, "f19": 0.9, "f20": 0.01, "f21": 0.125, "f22": 32294109, "f23": 8761332607, "f24": 150911615, "f25": 118617506, "f26": 42.63, "f27": 40.26, "f28": 41.11, "f29": 34.11, "f30": 37.15, "f31": 39.14, "f35": 1000000, "f36": 0.2484, "f37": 0.2257, "f38": 0.445, "f44": 50, "f78": 0.4547, "f79": 0.2993, "f81": 0.182, "f82": 1521, "f83": 1499, "f84": 1543, "f86": 0.02778, "f89": 0.4268, "f90": 0.288, "f91": 1, "f94": 34.34, "f95": 16.15, "f96": 85, "f97": 30.37, "f98": 117.2, "f99": 1.874, "f100": 75.46, "f101": 0.01946, "f102": 0.1385, "f103": 0.04088, "f104": 0.1803, "f105": 0.0008868, "f106": 0.06809, "f107": 0.04863, "f108": 0.2484, "f109": 59.31, "f110": 192.7, "f111": 38920, "f112": 136200, "f113": 97260, "f114": 463.3, "f116": 0.7833, "f148": 48.36, "f149": 191.2, "f151": 45.74, "f152": 45.74, "f153": 0.15, "f155": 1, "f156": 7.833, "f157": 0.3377, "f158": 0.3915, "f159": 0.6085, "f165": 191.2, "f166": 139.6, "f167": 219.4, "f168": 176.1, "f169": 197.1, "f171": 139.6, "f172": 19.84, "f173": 219.4, "f174": 106.6, "f175": 86.93, "f176": 192.3, "f177": 84.33, "f178": 84.33, "f179": 48.36, "f180": 191.2, "f181": 45.74, "f182": 45.74, "f183": 40.67, "f184": 196.8, "f185": 38.13, "f186": 38.13, "f187": 37.68, "f188": 155.9, "f189": 34.47, "f190": 34.47, "f266": 0.077, "f267": 0.104, "f268": 0.3, "f269": 0.2, "f270": 0.01569, "f271": 0.1, "f272": 0.5, "f274": 176.1, "f275": 34.06, "f276": 197.1, "f277": 82.47, "f278": 0, "f279": 0.5174, "f285": 0.2929, "f286": 0.181, "f288": 45.74, "f289": 19.84, "f290": 106.6, "f291": 34.06, "f292": 82.47}, {"name": "Claude Haiku 5.5 (low)", "creator": "Anthropic", "open_weights": false, "f6": 0.2291, "f7": 1223, "f8": 1205, "f9": 1243, "f10": 1114, "f11": 1103, "f12": 1124, "f13": 993.2, "f14": 975, "f15": 1013, "f16": 0.3384, "f17": 1114, "f18": 4.296, "f19": 0.9, "f20": 0.01, "f21": 0.125, "f22": 14466693, "f23": 1467759170, "f24": 29899488, "f25": 15432795, "f26": 29.55, "f27": 26.85, "f28": 28.51, "f29": 24.84, "f30": 27.12, "f31": 27.29, "f35": 1000000, "f36": 0.04376, "f37": 0.09143, "f38": 0.215, "f44": 20, "f78": 0.2933, "f79": 0.08037, "f81": 0.112, "f82": 1131, "f83": 1109, "f84": 1152, "f86": 0.01667, "f89": 0.2702, "f90": 0.141, "f91": 1, "f94": 18.62, "f95": 7.233, "f96": 13.77, "f97": 9.005, "f98": 24.65, "f99": 1.879, "f100": 14.95, "f101": 0.00644, "f102": 0.01997, "f103": 0.008823, "f104": 0.02968, "f105": 0.0008884, "f106": 0.01408, "f107": 0.00764, "f108": 0.04376, "f109": 7.716, "f110": 39.6, "f111": 12880, "f112": 28160, "f113": 15280, "f114": 103, "f116": 0.72, "f148": 9.813, "f149": 168.9, "f151": 6.852, "f152": 6.852, "f153": 0.1222, "f155": 1, "f156": 2.167, "f157": 0.3037, "f158": 0.405, "f159": 0.595, "f165": 168.9, "f166": 122.1, "f167": 225.2, "f168": 137, "f169": 193.2, "f171": 122.1, "f172": 4.047, "f173": 225.2, "f174": 12.69, "f175": 30.51, "f176": 231.7, "f177": 28.35, "f178": 28.35, "f179": 9.813, "f180": 168.9, "f181": 6.852, "f182": 6.852, "f183": 9.853, "f184": 165.9, "f185": 6.838, "f186": 6.838, "f187": 7.678, "f188": 122.8, "f189": 3.606, "f190": 3.606, "f266": 0.077, "f267": 0.104, "f268": 0.3, "f269": 0.2, "f270": 0.01569, "f271": 0.1, "f272": 0.5, "f274": 137, "f275": 5.101, "f276": 193.2, "f277": 9.11, "f278": 0, "f279": 0.4919, "f285": 0.1263, "f286": 0.01905, "f288": 6.852, "f289": 4.047, "f290": 12.69, "f291": 5.101, "f292": 9.11}, {"name": "Claude Opus 5.5 (low with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.5293, "f7": 1434, "f8": 1416, "f9": 1452, "f10": 1278, "f11": 1268, "f12": 1287, "f13": 1146, "f14": 1130, "f15": 1162, "f16": 0.4253, "f17": 1278, "f18": 104.9, "f19": 0.95, "f20": 0.2, "f21": 5, "f22": 14659118, "f23": 1174313288, "f24": 21114634, "f25": 6455516, "f26": 45.15, "f27": 42.97, "f28": 42.17, "f29": 45.14, "f30": 43.48, "f31": 47.5, "f35": 1000000, "f36": 0.9755, "f37": 0.1771, "f38": 0.335, "f44": 20, "f78": 0.4266, "f79": 0.1584, "f81": 0.256, "f82": 1240, "f83": 1220, "f84": 1261, "f89": 0.4833, "f90": 0.417, "f91": 4, "f94": 34.5, "f95": 293.2, "f96": 220.6, "f97": 261.3, "f98": 557.4, "f99": 75.46, "f100": 422.3, "f101": 0.2439, "f102": 0.326, "f103": 0.2326, "f104": 0.5943, "f105": 0.03569, "f106": 0.3813, "f107": 0.1373, "f108": 0.9755, "f109": 129.1, "f110": 979.7, "f111": 12200, "f112": 19060, "f113": 6864, "f114": 150.6, "f116": 0.8067, "f148": 10.81, "f149": 78.99, "f151": 4.422, "f152": 4.422, "f153": 0.1944, "f154": 0.8468, "f155": 4, "f156": 39.03, "f157": 0.6333, "f158": 0.6627, "f159": 0.3373, "f165": 80.34, "f166": 63.26, "f167": 97.2, "f168": 66.82, "f169": 88.41, "f171": 62.23, "f172": 1.414, "f173": 98.34, "f174": 15.35, "f175": 28.96, "f176": 101, "f177": 24.01, "f178": 24.01, "f179": 10.23, "f180": 80.34, "f181": 4.012, "f182": 4.012, "f183": 12.65, "f184": 75.85, "f185": 6.055, "f186": 6.055, "f187": 9.659, "f188": 61.56, "f189": 1.537, "f190": 1.537, "f266": 2.94, "f267": 4.158, "f268": 12, "f269": 8, "f270": 0.4314, "f271": 4, "f272": 20, "f274": 66.74, "f275": 2.898, "f276": 88.54, "f277": 10.72, "f278": 0, "f279": 0.5856, "f285": 0.3131, "f286": 0.2429, "f288": 4.012, "f289": 1.499, "f290": 16.8, "f291": 2.875, "f292": 10.58}, {"name": "Sarvam 105B (high)", "creator": "Sarvam", "open_weights": true, "f20": 0.026, "f35": 128000, "f37": 0, "f85": 0.7384, "f89": 0.1103, "f92": 0.3435, "f116": 0, "f148": 15.43, "f149": 181.1, "f150": 11.04, "f151": 12.67, "f152": 1.626, "f155": 1, "f171": 141.6, "f172": 1.505, "f173": 229, "f174": 1.873, "f271": 0.042, "f272": 0.17, "f274": 156.2, "f275": 1.57, "f276": 197.9, "f277": 1.694, "f282": 0.4678, "f287": 0.01515}, {"name": "Gemma 4 E4B (non-reasoning)", "creator": "Google", "open_weights": true, "f35": 131072, "f37": 0.002857, "f85": 0.5495, "f89": 0.04819, "f92": 0.4054, "f116": 0.24, "f148": 11.9, "f149": 45.58, "f151": 0.928, "f152": 0.928, "f154": 0.5121, "f155": 1, "f171": 23.43, "f172": 0.6795, "f173": 74.16, "f174": 1.302, "f271": 0.02, "f272": 0.1, "f274": 32.57, "f275": 0.7845, "f276": 56.28, "f277": 1.011, "f282": 0.2602, "f287": 0.07576}, {"name": "Ling 3.1 Flash 1019", "creator": "InclusionAI", "open_weights": true, "f6": 0.6755, "f7": 1797, "f8": 1778, "f9": 1817, "f10": 1521, "f11": 1510, "f12": 1532, "f13": 1310, "f14": 1291, "f15": 1330, "f16": 0.5449, "f17": 1521, "f18": 353, "f19": 0.8, "f20": 0.06, "f22": 59233508, "f23": 20710674930, "f24": 239670564, "f25": 180437056, "f26": 38.41, "f27": 35.36, "f28": 42.58, "f29": 38.32, "f30": 35.52, "f31": 47.58, "f35": 1000000, "f36": 3.185, "f37": 0.26, "f38": 0.375, "f79": 0.1701, "f81": 0.126, "f82": 1653, "f83": 1628, "f84": 1678, "f89": 0.4347, "f90": 0.172, "f91": 1, "f93": 25, "f94": 29.47, "f95": 53.31, "f96": 1105, "f97": 687.3, "f98": 1794, "f99": 1.35, "f100": 215.7, "f101": 0.06608, "f102": 1.857, "f103": 1.126, "f104": 2.983, "f105": 0.0005834, "f106": 0.2022, "f107": 0.1362, "f108": 3.185, "f109": 162.4, "f110": 2009, "f111": 73420, "f112": 224700, "f113": 151300, "f116": 0.8233, "f153": 0.15, "f155": 1, "f156": -0.1333, "f157": 0.2653, "f158": 0.363, "f159": 0.637, "f160": 6, "f161": 38.89, "f162": 1, "f163": 0, "f164": 0, "f170": 560, "f266": 0.192, "f267": 0.3059, "f268": 0.6, "f269": 0.45, "f270": 0.07059, "f271": 0.3, "f272": 0.9, "f278": 2000, "f279": 0.5683, "f285": 0.3283, "f286": 0.04286}, {"name": "Muse Glimmer (high)", "creator": "Meta", "open_weights": true, "f4": 0.2, "f6": 0.06832, "f7": 370.2, "f8": 352.5, "f9": 386.2, "f10": 477.8, "f11": 469.4, "f12": 486.1, "f13": 345.5, "f14": 329.2, "f15": 361.9, "f16": 0.1151, "f17": 477.8, "f18": 6.728, "f19": 0.8762, "f20": 0.01, "f22": 12885508, "f23": 2235842692, "f24": 39453876, "f25": 26568368, "f26": 11.74, "f27": 15.42, "f28": 9.982, "f30": 12.55, "f31": 9.559, "f35": 131072, "f36": 0.06246, "f37": 0.02571, "f38": 0.07, "f44": 40, "f45": 0.3474, "f78": 0.1392, "f79": 0.01474, "f81": 0.1, "f82": 792.7, "f83": 769, "f84": 816, "f85": 0.8354, "f89": 0.2196, "f90": 0.091, "f91": 4, "f94": 6.341, "f95": 15.46, "f96": 82.48, "f97": 50.15, "f98": 134.6, "f99": 1.977, "f100": 47.34, "f101": 0.01399, "f102": 0.08201, "f103": 0.04681, "f104": 0.1297, "f105": 0.0008624, "f106": 0.03128, "f107": 0.01729, "f108": 0.161, "f109": 31.88, "f110": 182, "f111": 11660, "f112": 26070, "f113": 14410, "f114": 226.6, "f116": 0.8333, "f148": 24.9, "f149": 104.2, "f150": 19.19, "f151": 20.1, "f152": 0.9095, "f154": 0.7434, "f155": 3, "f156": -32.23, "f157": 0.2797, "f158": 0.8357, "f159": 0.1643, "f160": 6, "f161": 44.44, "f162": 2, "f163": 0, "f164": 0, "f165": 104.2, "f166": 41.36, "f167": 221, "f168": 88.76, "f169": 162.5, "f170": 30, "f171": 74.55, "f172": 0.7513, "f173": 186.9, "f174": 1.742, "f175": 27.37, "f176": 120.9, "f177": 23.24, "f178": 6.694, "f179": 25.07, "f180": 104.2, "f181": 20.28, "f182": 1.081, "f183": 19.21, "f184": 133.1, "f185": 15.45, "f186": 0.4277, "f187": 23.58, "f188": 109.6, "f189": 19.02, "f190": 0.7805, "f191": 8, "f192": 10, "f193": 20, "f194": 31, "f195": 79, "f196": 93, "f197": 38, "f198": 50, "f199": 8, "f200": 17, "f201": 71, "f202": 81, "f203": 18, "f204": 25, "f205": 58, "f206": 71, "f207": 8.425, "f208": 23.28, "f209": 85.15, "f210": 43.07, "f211": 15.85, "f212": 72.77, "f213": 20.8, "f214": 65.35, "f215": 2.97, "f216": 14.09, "f217": 7.774, "f218": 3210, "f219": 7.333, "f220": 9.4, "f221": 0.1644, "f222": 0.8022, "f223": 0, "f224": 0.2756, "f225": 0.06111, "f226": 1.292, "f227": 1.394, "f228": 2.382, "f229": 12.19, "f230": 0.06778, "f231": 3.744, "f232": 7.842, "f233": 38.97, "f234": 0.006667, "f235": 515.7, "f236": 522.1, "f237": 865.1, "f238": 682.3, "f239": 1051, "f240": 1109, "f241": 411, "f242": 809.2, "f243": 1019, "f244": 1100, "f245": 877, "f246": 878.4, "f247": 1212, "f248": 911, "f249": 1285, "f250": 873.5, "f251": 505.4, "f252": 1394, "f253": 839.3, "f254": 1139, "f255": 872.4, "f256": 873.3, "f257": 1211, "f258": 1535, "f259": 953.5, "f260": 540.2, "f261": 1752, "f262": 765, "f263": 807, "f264": 1216, "f265": 176.8, "f266": 0.208, "f267": 0.3089, "f268": 0.75, "f269": 0.525, "f270": 0.05392, "f271": 0.1, "f272": 1, "f273": 0, "f274": 83.3, "f275": 0.825, "f276": 153.2, "f277": 1.401, "f278": 2000, "f279": 0.4491, "f283": 0.2351, "f284": 0.5169, "f285": 0.005051, "f286": 0, "f288": 1.081, "f289": 0.6075, "f290": 1.823, "f291": 0.7554, "f292": 1.437}, {"name": "Grok 4.7 (xhigh)", "creator": "SpaceXAI", "open_weights": false, "f0": 994.7, "f1": 964, "f2": 1025, "f4": 0.525, "f6": 0.6556, "f7": 1934, "f8": 1918, "f9": 1952, "f10": 1638, "f11": 1629, "f12": 1647, "f13": 1503, "f14": 1488, "f15": 1520, "f16": 0.5535, "f17": 1638, "f18": 730.3, "f19": 0.75, "f20": 0.5, "f22": 28615901, "f23": 7103324920, "f24": 142604745, "f25": 113988844, "f26": 47.58, "f27": 40.95, "f28": 51.69, "f29": 46.6, "f30": 47.2, "f31": 54.83, "f32": 1127, "f33": 1106, "f34": 1147, "f35": 500000, "f36": 7.512, "f37": 0.1771, "f38": 0.32, "f39": 46.3, "f43": 154.4, "f44": 50, "f78": 0.3383, "f79": 0.2866, "f80": 17.07, "f81": 0.2, "f82": 1722, "f83": 1700, "f84": 1743, "f86": 0.09444, "f87": 0.5602, "f88": 0.5578, "f89": 0.4314, "f90": 0.232, "f91": 3, "f94": 34.34, "f95": 171.7, "f96": 3093, "f97": 1805, "f98": 4929, "f99": 30.63, "f100": 855.6, "f101": 0.2344, "f102": 4.455, "f103": 2.488, "f104": 6.954, "f105": 0.01171, "f106": 0.5578, "f107": 0.3234, "f108": 7.512, "f109": 683.9, "f110": 5784, "f111": 39070, "f112": 92970, "f113": 53900, "f114": 1031, "f115": 0.4208, "f116": 0.7667, "f148": 34.57, "f149": 85.45, "f151": 28.72, "f152": 28.72, "f153": 0.2, "f155": 1, "f156": 31.23, "f157": 0.427, "f158": 0.2001, "f159": 0.7999, "f165": 85.45, "f166": 49.43, "f167": 138.1, "f168": 62.06, "f169": 123.6, "f171": 49.43, "f172": 7.926, "f173": 138.1, "f174": 292.7, "f175": 180.9, "f176": 120.8, "f177": 176.7, "f178": 176.7, "f179": 34.57, "f180": 85.45, "f181": 28.72, "f182": 28.72, "f183": 25.94, "f184": 82.47, "f185": 19.88, "f186": 19.88, "f187": 15.1, "f188": 48.96, "f189": 4.888, "f190": 4.888, "f191": 75, "f192": 92, "f193": 70, "f194": 81, "f195": 21, "f196": 39, "f197": 21, "f198": 31, "f199": 18, "f200": 44, "f201": 5, "f202": 9, "f203": 53, "f204": 73, "f205": 31, "f206": 43, "f207": 85.15, "f208": 72.77, "f209": 28.23, "f210": 25.75, "f211": 25.75, "f212": 5.95, "f213": 62.88, "f214": 38.12, "f215": 1.616, "f216": 15.29, "f217": 5.482, "f218": 2504, "f219": 3.551, "f220": 4.314, "f221": 0.04222, "f222": 2.48, "f223": 0, "f224": 0.004444, "f225": 0.007778, "f226": 1.057, "f227": 0.4244, "f228": 1.52, "f229": 6.633, "f230": 3.198, "f231": 0.7278, "f232": 6.389, "f233": 27.23, "f234": 0.04889, "f235": 393.2, "f236": 744.1, "f237": 1040, "f238": 1255, "f239": 1113, "f240": 974.5, "f241": 1105, "f242": 690.3, "f243": 1310, "f244": 840.8, "f245": 782.7, "f246": 892.7, "f247": 707.4, "f248": 883.4, "f249": 1133, "f250": 1289, "f251": 1006, "f252": 1184, "f253": 1108, "f254": 621.8, "f255": 1038, "f256": 1118, "f257": 1029, "f258": 1220, "f259": 820.2, "f260": 1263, "f261": 904.1, "f262": 785.3, "f263": 896.1, "f264": 701.9, "f265": 753.5, "f266": 1.35, "f267": 2.04, "f268": 4, "f269": 3, "f270": 0.5686, "f271": 2, "f272": 6, "f274": 62.06, "f275": 18.97, "f276": 123.6, "f277": 46.65, "f278": 0, "f279": 0.5741, "f281": 159.5, "f285": 0.2576, "f286": 0.04762, "f288": 28.72, "f289": 7.926, "f290": 292.7, "f291": 18.97, "f292": 46.65}, {"name": "GPT-5.3 Codex (xhigh)", "creator": "OpenAI", "open_weights": false, "f17": 868.1, "f20": 0.175, "f35": 400000, "f37": 0.1686, "f43": 157.1, "f85": 0.9152, "f89": 0.4249, "f92": 0.7537, "f116": 0.8333, "f148": 60.61, "f149": 80.16, "f151": 54.37, "f152": 54.37, "f154": 0.785, "f155": 1, "f171": 58.4, "f172": 25.33, "f173": 128.3, "f174": 132.9, "f271": 1.75, "f272": 14, "f274": 70.35, "f275": 43.48, "f276": 98.32, "f277": 78.66, "f281": 157.1, "f282": 0.8596, "f287": 0.5303}, {"name": "Nemotron 3 Ultra", "creator": "NVIDIA", "open_weights": true, "f0": 572.5, "f1": 529, "f2": 616, "f4": 0.0625, "f6": 0.02986, "f7": 832.5, "f8": 819.1, "f9": 845.5, "f10": 877.4, "f11": 870.1, "f12": 884.8, "f13": 878.9, "f14": 865, "f15": 892.7, "f16": 0.2202, "f17": 877.4, "f18": 73.38, "f19": 0.8, "f20": 0.1, "f22": 21237089, "f23": 5276007539, "f24": 60851489, "f25": 39614400, "f26": 24.76, "f27": 22.85, "f28": 24.2, "f29": 18.02, "f30": 22.64, "f31": 15.3, "f32": 303.6, "f33": 270, "f34": 337, "f35": 262144, "f36": 3.158, "f37": 0.03143, "f38": 0.15, "f43": 145.9, "f45": 0.2889, "f78": 0.1052, "f79": 0.0109, "f81": 0.05, "f82": 1021, "f83": 1004, "f84": 1038, "f85": 0.8667, "f89": 0.2841, "f90": 0.085, "f91": 6, "f92": 0.8136, "f93": 55, "f94": 11.76, "f95": 57.34, "f96": 447, "f97": 928, "f98": 1378, "f99": 2.678, "f100": 164.3, "f101": 0.08303, "f102": 0.6829, "f103": 1.403, "f104": 2.087, "f105": 0.001166, "f106": 0.139, "f107": 0.05593, "f108": 2.226, "f109": 107, "f110": 1542, "f111": 30750, "f112": 51470, "f113": 20710, "f114": 310.5, "f116": 0.7933, "f148": 21.07, "f149": 136.4, "f150": 16.68, "f151": 17.4, "f152": 1.506, "f153": 0.05556, "f155": 4, "f156": 3.433, "f157": 0.2123, "f158": 0.226, "f159": 0.774, "f160": 6, "f161": 83.33, "f162": 6, "f163": 1.5, "f164": 1.5, "f165": 158.3, "f166": 24.52, "f167": 435.9, "f168": 83.44, "f169": 328.9, "f170": 550, "f171": 84.94, "f172": 0.936, "f173": 239.8, "f174": 2.849, "f175": 17.01, "f176": 222.5, "f177": 14.77, "f178": 4.544, "f179": 18.85, "f180": 158.3, "f181": 15.69, "f182": 1.318, "f183": 19.24, "f184": 150.8, "f185": 15.92, "f186": 0.8361, "f187": 28.88, "f188": 99.64, "f189": 23.86, "f190": 1.028, "f191": 10, "f192": 15, "f193": 6, "f194": 9, "f195": 5, "f196": 9, "f197": 70, "f198": 87, "f199": 7, "f200": 16, "f201": 92, "f202": 95, "f203": 7, "f204": 14, "f205": 1, "f206": 4, "f207": 13.38, "f208": 8.425, "f209": 5.95, "f210": 72.77, "f211": 8.425, "f212": 92.58, "f213": 8.425, "f214": 1, "f215": 12.02, "f216": 14.91, "f217": 38.44, "f218": 5778, "f219": 6.371, "f220": 5.856, "f221": 0.5267, "f222": 1.746, "f223": 2.509, "f224": 0, "f225": 0.3211, "f226": 4.522, "f227": 8.643, "f228": 2.363, "f229": 7.927, "f230": 25.31, "f231": 3.12, "f232": 28.12, "f233": 54.12, "f234": 2.838, "f235": 748.1, "f236": 386.3, "f237": 376.7, "f238": 944, "f239": 814.6, "f240": 618.7, "f241": 558.6, "f242": 550.9, "f243": 210.8, "f244": 6.13, "f245": 1100, "f246": 715.8, "f247": 518.6, "f248": 507.6, "f249": 1497, "f250": 574.7, "f251": 616.4, "f252": 1047, "f253": -77.49, "f254": 391.8, "f255": 895.3, "f256": 263.4, "f257": 1659, "f258": 1993, "f259": 1337, "f260": -351.7, "f261": 2004, "f262": 740.6, "f263": 984.4, "f264": 1242, "f265": -61.79, "f266": 0.474, "f267": 0.6208, "f268": 1.65, "f269": 1.125, "f270": 0.15, "f271": 0.5, "f272": 2.15, "f274": 119.7, "f275": 1.121, "f276": 153.6, "f277": 1.832, "f278": 2275, "f279": 0.4028, "f280": 41.7, "f281": 141.8, "f282": 0.8333, "f283": 0.1423, "f284": 0.5393, "f285": 0.005051, "f286": 0, "f287": 0.3636, "f288": 1.318, "f289": 0.6561, "f290": 58.79, "f291": 0.9689, "f292": 2.127}, {"name": "LongCat 2.0 (FP8)", "creator": "LongCat", "open_weights": true, "f6": 0.04534, "f17": 740, "f20": 0.015, "f35": 262144, "f37": 0.02571, "f81": 0.064, "f82": 877, "f85": 0.7798, "f89": 0.3369, "f90": 0.115, "f116": 0.65, "f148": 36, "f149": 75.17, "f150": 26.61, "f151": 29.35, "f152": 2.739, "f155": 1, "f171": 61.84, "f172": 2.422, "f173": 98.91, "f174": 3.633, "f271": 0.75, "f272": 2.95, "f274": 69.39, "f275": 2.56, "f276": 86.21, "f277": 2.849, "f279": 0.3634, "f283": 0.132, "f284": 0.5019, "f285": 0}, {"name": "Llama 3.2 11B (Vision)", "creator": "Meta", "open_weights": true, "f3": 0.01667, "f35": 131072, "f37": 0, "f85": 0.2212, "f89": 0.0553, "f92": 0.3041, "f116": 0.1267, "f147": 0.1101, "f148": 17.63, "f149": 30.56, "f151": 1.271, "f152": 1.271, "f154": 0.2931, "f155": 1, "f171": 13.52, "f172": 1.036, "f173": 43.57, "f174": 2.808, "f271": 0.345, "f272": 0.345, "f274": 17, "f275": 1.132, "f276": 34.61, "f277": 1.674, "f282": 0.1462, "f287": 0.007576}, {"name": "Nova 2.0 Lite (high)", "creator": "Amazon", "open_weights": false, "f3": 0.9433, "f35": 1000000, "f37": 0.002857, "f82": 374, "f85": 0.8111, "f89": 0.1163, "f92": 0.7075, "f116": 0.6033, "f147": 0.7111, "f148": 28.76, "f149": 177.5, "f150": 11.27, "f151": 25.95, "f152": 14.68, "f154": 0.6376, "f155": 1, "f171": 135.6, "f172": 7.183, "f173": 264.4, "f174": 26.85, "f271": 0.3, "f272": 2.5, "f274": 144.2, "f275": 9.323, "f276": 210, "f277": 20.9, "f282": 0.7281, "f284": 0.161, "f287": 0.1667}, {"name": "Solar Mini 4", "creator": "Upstage", "open_weights": false, "f6": 0.2225, "f17": 867.9, "f20": 0.01, "f35": 524288, "f37": 0.01429, "f81": 0.05, "f82": 1092, "f89": 0.2576, "f116": 0.8333, "f148": 22.91, "f149": 118.4, "f150": 16.89, "f151": 18.68, "f152": 1.792, "f153": 0.06667, "f155": 1, "f156": -11.63, "f157": 0.1823, "f159": 0.6347, "f171": 83.37, "f172": 1.262, "f173": 130.3, "f174": 2.072, "f271": 0.1, "f272": 0.4, "f274": 100.6, "f275": 1.586, "f276": 124, "f277": 1.946, "f279": 0.4757, "f285": 0.0101}, {"name": "GPT-6 Luna (non-reasoning)", "creator": "OpenAI", "open_weights": false, "f6": 0.09142, "f7": 884.4, "f8": 865.7, "f9": 901.7, "f10": 902.3, "f11": 893.1, "f12": 911.4, "f13": 915.3, "f14": 900.4, "f15": 929.3, "f16": 0.2131, "f17": 902.3, "f18": 1.893, "f19": 0.9, "f20": 0.01, "f21": 0.125, "f22": 9201564, "f23": 3924101437, "f24": 9201564, "f25": 0, "f26": 20.01, "f27": 16.51, "f28": 19.02, "f29": 15.69, "f30": 16.59, "f31": 16.97, "f35": 762100, "f36": 0.07142, "f37": 0.01143, "f38": 0.045, "f78": 0.1379, "f79": 0.01582, "f81": 0.058, "f82": 1052, "f83": 1030, "f84": 1074, "f89": 0.08573, "f90": 0.063, "f91": 2, "f94": 9.392, "f95": 4.601, "f96": 38.4, "f97": 8.428, "f98": 48.54, "f99": 1.715, "f100": 4.601, "f101": 0.005029, "f102": 0.05646, "f103": 0.009117, "f104": 0.06639, "f105": 0.000815, "f106": 0.005029, "f107": 0, "f108": 0.07142, "f109": 0, "f110": 53.14, "f111": 10060, "f112": 10060, "f113": 0, "f114": 88.26, "f116": 0.3967, "f148": 4.818, "f149": 131.5, "f151": 0.943, "f152": 0.943, "f153": 0.15, "f154": 0.6208, "f155": 2, "f156": -25.8, "f157": 0.301, "f158": 0.7997, "f159": 0.2003, "f165": 113.5, "f166": 87.86, "f167": 135.3, "f168": 99.77, "f169": 119.8, "f171": 85.33, "f172": 0.6748, "f173": 159.9, "f174": 2.646, "f175": 5.959, "f176": 107.7, "f177": 1.318, "f178": 1.318, "f179": 5.248, "f180": 113.5, "f181": 0.8419, "f182": 0.8419, "f183": 5.205, "f184": 113, "f185": 0.7793, "f186": 0.7793, "f187": 5.571, "f188": 105.9, "f189": 0.8496, "f190": 0.8496, "f266": 0.077, "f267": 0.104, "f268": 0.3, "f269": 0.2, "f270": 0.01569, "f271": 0.1, "f272": 0.5, "f274": 106.7, "f275": 0.8032, "f276": 141.4, "f277": 1.271, "f278": 0, "f279": 0.4306, "f285": 0.01515, "f286": 0.009524, "f288": 0.8419, "f289": 0.6569, "f290": 2.219, "f291": 0.7422, "f292": 1.052}, {"name": "Qwen3.5 4B (FP8)", "creator": "Alibaba", "open_weights": true, "f35": 262144, "f37": 0, "f85": 0.7707, "f89": 0.09917, "f92": 0.5197, "f116": 0.63, "f148": 169.5, "f149": 14.83, "f150": 134.8, "f151": 135.8, "f152": 0.9134, "f154": 0.6538, "f155": 1, "f171": 8.137, "f172": 0.6768, "f173": 43.16, "f174": 41.22, "f271": 0.03, "f272": 0.15, "f274": 9.083, "f275": 0.7271, "f276": 26.84, "f277": 1.938, "f282": 0.9211, "f283": 0.06804, "f284": 0.2584, "f287": 0.1818}, {"name": "Qwen3.8 27B (medium)", "creator": "Alibaba", "open_weights": true, "f6": 0.4025, "f7": 1533, "f8": 1520, "f9": 1548, "f10": 1373, "f11": 1365, "f12": 1381, "f13": 1261, "f14": 1247, "f15": 1274, "f16": 0.4653, "f17": 1373, "f18": 286.8, "f19": 0.8, "f20": 0.1, "f22": 27843815, "f23": 6899175288, "f24": 87944708, "f25": 60100893, "f26": 28.84, "f27": 21.67, "f28": 29.3, "f29": 24.11, "f30": 26.21, "f31": 34.43, "f35": 1000000, "f36": 2.16, "f37": 0, "f38": 0.165, "f44": 30, "f78": 0.3474, "f79": 0.115, "f81": 0.128, "f82": 1389, "f83": 1370, "f84": 1407, "f85": 0.8455, "f89": 0.1409, "f90": 0.067, "f91": 1, "f94": 17.48, "f95": 83.53, "f96": 519.3, "f97": 846.9, "f98": 1373, "f99": 6.31, "f100": 263.8, "f101": 0.08762, "f102": 0.7287, "f103": 1.169, "f104": 1.901, "f105": 0.002964, "f106": 0.2592, "f107": 0.1716, "f108": 2.16, "f109": 180.3, "f110": 1636, "f111": 29210, "f112": 86410, "f113": 57200, "f114": 1954, "f116": 0.7967, "f148": 63.36, "f149": 42.1, "f150": 47.5, "f151": 51.48, "f152": 3.979, "f153": 0.03889, "f154": 0.7416, "f155": 1, "f156": -35.87, "f157": 0.1787, "f158": 0.6542, "f159": 0.3458, "f160": 6, "f161": 38.89, "f162": 1, "f163": 0, "f164": 0, "f165": 42.1, "f166": 31.46, "f167": 58.84, "f168": 34.48, "f169": 44.47, "f170": 27, "f171": 31.46, "f172": 3.718, "f173": 58.84, "f174": 5.284, "f175": 43.91, "f176": 91.8, "f177": 38.47, "f178": 16.68, "f179": 63.36, "f180": 42.1, "f181": 51.48, "f182": 3.979, "f183": 59.12, "f184": 43.18, "f185": 47.54, "f186": 1.227, "f187": 73.14, "f188": 34.77, "f189": 58.76, "f190": 1.236, "f266": 0.47, "f267": 0.5248, "f268": 1.75, "f269": 1.125, "f270": 0.1324, "f271": 0.5, "f272": 3, "f274": 34.48, "f275": 3.82, "f276": 44.47, "f277": 4.236, "f278": 2000, "f279": 0.39, "f283": 0.4742, "f284": 0.6517, "f285": 0.05051, "f286": 0.009524, "f288": 3.979, "f289": 3.718, "f290": 5.284, "f291": 3.82, "f292": 4.236}, {"name": "Kimi K3.1 Pro", "creator": "Kimi", "open_weights": false, "f0": 1110, "f1": 1078, "f2": 1143, "f4": 0.3875, "f6": 0.733, "f7": 1995, "f8": 1976, "f9": 2014, "f10": 1678, "f11": 1667, "f12": 1688, "f13": 1666, "f14": 1646, "f15": 1686, "f16": 0.504, "f17": 1678, "f18": 657.1, "f19": 0.9, "f20": 0.2, "f22": 26655711, "f23": 7010897686, "f24": 113178775, "f25": 86523064, "f26": 51.31, "f27": 50.44, "f28": 53.34, "f29": 51.62, "f30": 49.23, "f31": 57.62, "f35": 1000000, "f36": 3.681, "f37": 0.2457, "f38": 0.45, "f44": 60, "f78": 0.4707, "f79": 0.2545, "f81": 0.314, "f82": 1846, "f83": 1820, "f84": 1872, "f89": 0.5246, "f90": 0.373, "f91": 5, "f93": 104, "f94": 46, "f95": 266.6, "f96": 1333, "f97": 651.8, "f98": 2021, "f99": 35.79, "f100": 1132, "f101": 0.2801, "f102": 2.102, "f103": 0.84, "f104": 2.959, "f105": 0.01675, "f106": 0.7224, "f107": 0.4423, "f108": 3.681, "f109": 865.2, "f110": 3153, "f111": 28010, "f112": 72240, "f113": 44230, "f114": 1642, "f116": 0.8633, "f148": 55.69, "f149": 55, "f150": 42.2, "f151": 45.14, "f152": 2.947, "f153": 0.3833, "f154": 0.8387, "f155": 1, "f156": 29.87, "f157": 0.4893, "f158": 0.3734, "f159": 0.6266, "f165": 34.55, "f166": 23.83, "f167": 151.3, "f168": 28.28, "f169": 47.87, "f170": 2800, "f171": 39.32, "f172": 1.733, "f173": 154, "f174": 19.26, "f175": 44.13, "f176": 76.3, "f177": 37.58, "f178": 11.37, "f179": 75.31, "f180": 34.55, "f181": 60.84, "f182": 2.956, "f183": 79.2, "f184": 32.65, "f185": 63.89, "f186": 2.63, "f187": 97.34, "f188": 26.4, "f189": 78.4, "f190": 2.649, "f191": 58, "f192": 76, "f193": 54, "f194": 68, "f195": 47, "f196": 54, "f197": 21, "f198": 32, "f199": 68, "f200": 96, "f201": 16, "f202": 23, "f203": 82, "f204": 96, "f205": 43, "f206": 55, "f207": 62.88, "f208": 62.88, "f209": 52.98, "f210": 23.28, "f211": 87.62, "f212": 20.8, "f213": 87.62, "f214": 50.5, "f215": 1.596, "f216": 14.88, "f217": 9.261, "f218": 2662, "f219": 5.672, "f220": 5.478, "f221": 0.06, "f222": 2.929, "f223": 0.004444, "f224": 0.06333, "f225": 0.02222, "f226": 1.731, "f227": 0.6167, "f228": 1.713, "f229": 8.566, "f230": 0.3178, "f231": 1.819, "f232": 6.112, "f233": 27.11, "f234": 0.09333, "f235": 389.2, "f236": 914.9, "f237": 976.9, "f238": 1113, "f239": 1066, "f240": 1021, "f241": 977.7, "f242": 954.4, "f243": 1189, "f244": 897.4, "f245": 855, "f246": 1101, "f247": 855.4, "f248": 1003, "f249": 1124, "f250": 1144, "f251": 1047, "f252": 1045, "f253": 944.4, "f254": 779, "f255": 1090, "f256": 977.4, "f257": 1187, "f258": 1132, "f259": 980.3, "f260": 1023, "f261": 1084, "f262": 973.8, "f263": 1071, "f264": 1013, "f265": 989.1, "f266": 1.54, "f267": 2.079, "f268": 6, "f269": 4, "f270": 0.3137, "f271": 2, "f272": 10, "f274": 45.49, "f275": 2.366, "f276": 81.33, "f277": 3.625, "f278": 2000, "f279": 0.6076, "f285": 0.6717, "f286": 0.3429, "f288": 2.956, "f289": 1.629, "f290": 7.773, "f291": 2.448, "f292": 3.701}, {"name": "Qwen3.6 35B A3B (non-reasoning)", "creator": "Alibaba", "open_weights": true, "f35": 262144, "f37": 0, "f82": 854.7, "f85": 0.8172, "f89": 0.139, "f92": 0.3619, "f116": 0.6433, "f148": 5.389, "f149": 132.5, "f151": 1.183, "f152": 1.183, "f154": 0.7104, "f155": 7, "f171": 67.1, "f172": 1.01, "f173": 186.6, "f174": 1.947, "f271": 0.1, "f272": 0.95, "f274": 103.4, "f275": 1.074, "f276": 157.7, "f277": 1.292, "f282": 0.8509, "f283": 0.05361, "f284": 0.4157, "f287": 0.2576}, {"name": "Ministral 3 3B", "creator": "Mistral", "open_weights": true, "f3": 0.22, "f6": 0.006659, "f17": 0, "f35": 193500, "f37": 0, "f81": 0, "f82": 37.09, "f85": 0.3576, "f89": 0.05375, "f90": 0.051, "f92": 0.268, "f116": 0.17, "f147": 0.2466, "f148": 2.871, "f149": 302.5, "f151": 0.8596, "f152": 0.8596, "f153": 0, "f154": 0.3809, "f155": 2, "f171": 239.2, "f172": 0.6926, "f173": 464.1, "f174": 2.253, "f271": 0.1, "f272": 0.1, "f274": 282.8, "f275": 0.7529, "f276": 323.6, "f277": 1.072, "f279": 0.1528, "f282": 0.2485, "f283": 0.04742, "f284": 0, "f285": 0, "f287": 0}, {"name": "Beam 1.0 (NVFP4)", "creator": "Reflection", "open_weights": true, "f6": 0.4846, "f7": 983.1, "f8": 965.6, "f9": 1001, "f10": 976.2, "f11": 966.6, "f12": 985.8, "f13": 856.3, "f14": 838.4, "f15": 874.2, "f16": 0.3141, "f17": 976.2, "f18": 18.41, "f19": 0.9, "f20": 0.05, "f22": 12982149, "f23": 3701682373, "f24": 53737350, "f25": 40755201, "f26": 27.76, "f27": 25.22, "f28": 30.24, "f29": 30.68, "f30": 28.14, "f31": 34.49, "f32": 675, "f33": 650, "f34": 700, "f35": 1048576, "f36": 0.6473, "f37": 0.1314, "f38": 0.265, "f43": 150.2, "f78": 0.2432, "f79": 0.05531, "f81": 0.116, "f82": 1177, "f83": 1159, "f84": 1196, "f89": 0.3466, "f90": 0.128, "f91": 5, "f93": 23, "f94": 17.73, "f95": 15.58, "f96": 143.9, "f97": 39.61, "f98": 185.3, "f99": 1.81, "f100": 64.48, "f101": 0.01477, "f102": 0.2054, "f103": 0.03713, "f104": 0.2433, "f105": 0.0007632, "f106": 0.04109, "f107": 0.02632, "f108": 0.2844, "f109": 48.91, "f110": 249.8, "f111": 12310, "f112": 34240, "f113": 21930, "f114": 92.05, "f116": 0.78, "f148": 9.094, "f149": 309, "f150": 6.472, "f151": 7.527, "f152": 0.5393, "f153": 0.1778, "f155": 5, "f156": 2.333, "f157": 0.3073, "f158": 0.41, "f159": 0.59, "f160": 6, "f161": 38.89, "f162": 1, "f163": 0, "f164": 0, "f165": 294.8, "f166": 87.81, "f167": 599.3, "f168": 230, "f169": 452.5, "f170": 501, "f171": 94.74, "f172": 0.46, "f173": 477.8, "f174": 0.9966, "f175": 13.62, "f176": 231.9, "f177": 11.46, "f178": 2.839, "f179": 9.076, "f180": 294.8, "f181": 7.38, "f182": 0.5967, "f183": 8.76, "f184": 302.8, "f185": 7.109, "f186": 0.5042, "f187": 12.13, "f188": 216, "f189": 9.814, "f190": 0.5569, "f191": 28, "f192": 43, "f193": 33, "f194": 48, "f195": 55, "f196": 74, "f197": 78, "f198": 90, "f199": 63, "f200": 92, "f201": 47, "f202": 55, "f203": 58, "f204": 80, "f205": 24, "f206": 36, "f207": 35.65, "f208": 35.65, "f209": 65.35, "f210": 87.62, "f211": 70.3, "f212": 52.98, "f213": 67.83, "f214": 28.23, "f215": 5.566, "f216": 14.27, "f217": 21.96, "f218": 4231, "f219": 12.99, "f220": 11.79, "f221": 0.1644, "f222": 4.714, "f223": 0.02333, "f224": 0.05, "f225": 0.04333, "f226": 5.669, "f227": 3.057, "f228": 5.53, "f229": 8.889, "f230": 12.19, "f231": 3.336, "f232": 19.46, "f233": 45.97, "f234": 0.4067, "f235": 604.1, "f236": 772, "f237": 839.3, "f238": 984.5, "f239": 1240, "f240": 1198, "f241": 622.8, "f242": 819.1, "f243": 1174, "f244": 742.5, "f245": 959, "f246": 1277, "f247": 907.9, "f248": 942.1, "f249": 1594, "f250": 1090, "f251": 747.6, "f252": 1352, "f253": 669.2, "f254": 909.3, "f255": 974.4, "f256": 1038, "f257": 1487, "f258": 1831, "f259": 1406, "f260": 629.5, "f261": 1549, "f262": 767.1, "f263": 1088, "f264": 955.6, "f265": 497.5, "f266": 0.228, "f267": 0.4079, "f268": 0.8, "f269": 0.6, "f270": 0.0549, "f271": 0.25, "f272": 1, "f274": 225.5, "f275": 0.4801, "f276": 422.4, "f277": 0.5763, "f278": 2000, "f279": 0.485, "f285": 0.0303, "f286": 0.004762, "f288": 0.5967, "f289": 0.2794, "f290": 1.527, "f291": 0.4796, "f292": 1.106}, {"name": "Gemma 4 26B A4B", "creator": "Google", "open_weights": true, "f6": 0.01943, "f17": 315.7, "f35": 262144, "f37": 0, "f43": 141.9, "f46": 17.42, "f47": 13.35, "f48": 11.54, "f49": 11.69, "f50": 9.62, "f51": 14.85, "f52": 15.42, "f53": 14.51, "f54": 12.12, "f55": 12.96, "f56": 9.38, "f57": 14.54, "f58": 10.81, "f59": 12.58, "f60": 13.42, "f61": 14.08, "f62": 13, "f82": 573.3, "f85": 0.7919, "f89": 0.1932, "f92": 0.7245, "f115": 0.2363, "f116": 0.6567, "f148": 27.4, "f149": 95.03, "f150": 21.05, "f151": 22.14, "f152": 0.9438, "f154": 0.6925, "f155": 7, "f171": 44.66, "f172": 0.737, "f173": 167.2, "f174": 2.558, "f271": 0, "f272": 0, "f274": 71.55, "f275": 0.8541, "f276": 142.4, "f277": 1.066, "f279": 0.4005, "f282": 0.4357, "f283": 0.1196, "f284": 0.3895, "f287": 0.1364}, {"name": "Qwen3.5 Omni Flash", "creator": "Alibaba", "open_weights": false, "f35": 256000, "f37": 0, "f85": 0.7424, "f89": 0.076, "f92": 0.3796, "f116": 0.52, "f148": 3.87, "f149": 238.9, "f151": 1.777, "f152": 1.777, "f154": 0.6474, "f155": 1, "f171": 199, "f172": 1.651, "f173": 311.8, "f174": 2.967, "f271": 0.1, "f272": 0.8, "f274": 204.2, "f275": 1.687, "f276": 273.5, "f277": 2.028, "f282": 0.845, "f287": 0.08333}, {"name": "GPT-6 Luna (max)", "creator": "OpenAI", "open_weights": false, "f0": 1000, "f1": 1000, "f2": 1000, "f4": 0.4375, "f6": 0.5317, "f7": 1376, "f8": 1358, "f9": 1395, "f10": 1336, "f11": 1328, "f12": 1346, "f13": 1395, "f14": 1379, "f15": 1410, "f16": 0.4121, "f17": 1336, "f18": 15.47, "f19": 0.9, "f20": 0.005, "f21": 0.0625, "f22": 16287852, "f23": 6011307698, "f24": 109588316, "f25": 93300464, "f26": 35.48, "f27": 33.2, "f28": 33.87, "f29": 34.82, "f30": 32.21, "f31": 43.19, "f32": 1030, "f33": 1010, "f34": 1049, "f35": 1000000, "f36": 0.07598, "f37": 0.1943, "f38": 0.415, "f43": 156.8, "f44": 60, "f78": 0.4193, "f79": 0.2517, "f80": 56.1, "f81": 0.228, "f82": 1445, "f83": 1424, "f84": 1465, "f86": 0.03333, "f87": 0.5458, "f88": 0.6189, "f89": 0.3851, "f90": 0.222, "f91": 8, "f94": 27.76, "f95": 8.144, "f96": 58.24, "f97": 21.32, "f98": 81.27, "f99": 1.714, "f100": 54.79, "f101": 0.008867, "f102": 0.08964, "f103": 0.02386, "f104": 0.1143, "f105": 0.0008148, "f106": 0.03765, "f107": 0.02878, "f108": 0.152, "f109": 46.65, "f110": 136.1, "f111": 17730, "f112": 75300, "f113": 57560, "f114": 639.6, "f116": 0.8333, "f148": 90.82, "f149": 118.3, "f151": 86.59, "f152": 86.59, "f153": 0.2611, "f154": 0.7965, "f155": 2, "f156": -8.267, "f157": 0.3963, "f158": 0.7935, "f159": 0.2065, "f165": 118.3, "f166": 97.88, "f167": 147.1, "f168": 110.1, "f169": 136.2, "f171": 97.88, "f172": 21.86, "f173": 147.1, "f174": 200.2, "f175": 189.5, "f176": 116, "f177": 185.2, "f178": 185.2, "f179": 90.82, "f180": 118.3, "f181": 86.59, "f182": 86.59, "f183": 100.6, "f184": 112.5, "f185": 96.16, "f186": 96.16, "f187": 94.67, "f188": 113.6, "f189": 90.26, "f190": 90.26, "f191": 37, "f192": 52, "f193": 30, "f194": 35, "f195": 13, "f196": 22, "f197": 13, "f198": 14, "f199": 17, "f200": 36, "f201": 3, "f202": 4, "f203": 51, "f204": 66, "f205": 33, "f206": 45, "f207": 45.55, "f208": 33.18, "f209": 15.85, "f210": 13.38, "f211": 18.32, "f212": 3.475, "f213": 57.92, "f214": 40.6, "f215": 1.283, "f216": 15.41, "f217": 5.176, "f218": 1736, "f219": 3.243, "f220": 5.253, "f221": 0.03444, "f222": 2.496, "f223": 0, "f224": 0.05, "f225": 0.01, "f226": 0.5856, "f227": 0.5244, "f228": 0.7289, "f229": 4.957, "f230": 0.4256, "f231": 1.083, "f232": 3.268, "f233": 18.17, "f234": 0.06333, "f235": 270.5, "f236": 765.8, "f237": 1045, "f238": 1015, "f239": 857.9, "f240": 673.4, "f241": 1027, "f242": 868.8, "f243": 914.9, "f244": 893.7, "f245": 860.4, "f246": 789.8, "f247": 867.1, "f248": 824.1, "f249": 865.4, "f250": 890.6, "f251": 904, "f252": 891.6, "f253": 1115, "f254": 731.5, "f255": 1017, "f256": 893.8, "f257": 902.2, "f258": 1080, "f259": 577.1, "f260": 992.5, "f261": 793.7, "f262": 808.7, "f263": 941.5, "f264": 1013, "f265": 885.9, "f266": 0.077, "f267": 0.104, "f268": 0.3, "f269": 0.2, "f270": 0.01569, "f271": 0.05, "f272": 0.25, "f274": 110.1, "f275": 49.37, "f276": 136.2, "f277": 118.3, "f278": 0, "f279": 0.5463, "f281": 157.4, "f285": 0.1263, "f286": 0.08571, "f288": 86.59, "f289": 21.86, "f290": 145.7, "f291": 49.37, "f292": 118.3}, {"name": "Nova 2.0 Lite (low)", "creator": "Amazon", "open_weights": false, "f3": 0.4667, "f35": 1000000, "f37": 0, "f85": 0.698, "f89": 0.04032, "f92": 0.6122, "f116": 0.5433, "f147": 0.4688, "f148": 23.94, "f149": 171.6, "f150": 11.65, "f151": 21.02, "f152": 9.371, "f154": 0.5798, "f155": 1, "f171": 108.6, "f172": 5.562, "f173": 249.8, "f174": 20.86, "f271": 0.3, "f272": 2.5, "f274": 153.7, "f275": 6.783, "f276": 198.2, "f277": 13.2, "f282": 0.7193, "f287": 0.03788}, {"name": "Magistral Small 1.2", "creator": "Mistral", "open_weights": true, "f3": 0.8033, "f6": 0.001911, "f35": 128000, "f37": 0.002857, "f82": 11.96, "f85": 0.6626, "f89": 0.06441, "f92": 0.4435, "f116": 0.1933, "f147": 0.7228, "f148": 24.11, "f149": 108.6, "f150": 18.41, "f151": 19.51, "f152": 1.102, "f154": 0.5549, "f155": 1, "f171": 73.67, "f172": 1.025, "f173": 113.1, "f174": 1.8, "f271": 0.5, "f272": 1.5, "f274": 99.13, "f275": 1.076, "f276": 110.1, "f277": 1.471, "f282": 0.2778, "f283": 0.04536, "f284": 0.04494, "f287": 0.04545}, {"name": "Gemma 4 26B A4B (non-reasoning)", "creator": "Google", "open_weights": true, "f20": 0.046, "f35": 262100, "f37": 0, "f46": 17.42, "f47": 13.35, "f48": 11.54, "f49": 11.69, "f50": 9.62, "f51": 14.85, "f52": 15.42, "f53": 14.51, "f54": 12.12, "f55": 12.96, "f56": 9.38, "f57": 14.54, "f58": 10.81, "f59": 12.58, "f60": 13.42, "f61": 14.08, "f62": 13, "f85": 0.7141, "f89": 0.1149, "f92": 0.4544, "f116": 0.4233, "f148": 5.472, "f149": 113.1, "f151": 0.9169, "f152": 0.9169, "f154": 0.6671, "f155": 8, "f171": 33.47, "f172": 0.7734, "f173": 206.7, "f174": 1.854, "f271": 0.07, "f272": 0.24, "f274": 73.19, "f275": 0.8723, "f276": 150.9, "f277": 1.03, "f282": 0.4035, "f287": 0.25}, {"name": "Ministral 3 14B", "creator": "Mistral", "open_weights": true, "f3": 0.3, "f6": 0.005512, "f17": 131.7, "f20": 0.02, "f35": 262144, "f37": 0, "f81": 0.012, "f82": 255.2, "f85": 0.5717, "f89": 0.04634, "f90": 0.044, "f92": 0.3204, "f116": 0.2633, "f147": 0.3513, "f148": 8.263, "f149": 69.18, "f151": 1.014, "f152": 1.014, "f153": 0.02222, "f154": 0.4983, "f155": 3, "f171": 39.6, "f172": 0.8295, "f173": 112.3, "f174": 2.504, "f271": 0.2, "f272": 0.2, "f274": 54.19, "f275": 0.9131, "f276": 89.46, "f277": 1.087, "f279": 0.2384, "f282": 0.2719, "f283": 0.06598, "f284": 0.09738, "f285": 0, "f287": 0.04545}, {"name": "Inkling Small", "creator": "Thinking Machines", "open_weights": true, "f4": 0.275, "f6": 0.04814, "f7": 785.9, "f8": 769.5, "f9": 801.1, "f10": 912.1, "f11": 903.7, "f12": 920.6, "f13": 1066, "f14": 1051, "f15": 1079, "f16": 0.2, "f17": 912.1, "f18": 10.74, "f19": 0.8, "f20": 0.06, "f22": 8751417, "f23": 1927051013, "f24": 71550549, "f25": 62799132, "f26": 25.36, "f27": 23.13, "f28": 23.65, "f29": 18.65, "f30": 21.74, "f31": 18.01, "f35": 390100, "f36": 0.2032, "f37": 0.08286, "f38": 0.185, "f43": 150.4, "f45": 0.427, "f78": 0.005533, "f79": 0.04775, "f80": 17.07, "f81": 0.112, "f82": 1133, "f83": 1110, "f84": 1155, "f85": 0.8949, "f86": 0, "f89": 0.3332, "f90": 0.121, "f91": 2, "f93": 12, "f94": 12.91, "f95": 10.5, "f96": 109.8, "f97": 26.35, "f98": 138.9, "f99": 2.755, "f100": 85.86, "f101": 0.0139, "f102": 0.129, "f103": 0.02886, "f104": 0.1591, "f105": 0.001246, "f106": 0.04406, "f107": 0.03016, "f108": 0.2032, "f109": 75.36, "f110": 224.8, "f111": 11580, "f112": 36720, "f113": 25130, "f114": 152, "f116": 0.7567, "f148": 11.37, "f149": 254.8, "f150": 8.212, "f151": 9.316, "f152": 1.103, "f153": 0.07778, "f154": 0.7405, "f155": 2, "f156": -9.467, "f157": 0.318, "f158": 0.6051, "f159": 0.3949, "f160": 5, "f161": 33.33, "f162": 1, "f163": 0, "f164": 0, "f165": 201.2, "f166": 182.6, "f167": 220.1, "f168": 197.7, "f169": 205, "f170": 266, "f171": 149.8, "f172": 0.9993, "f173": 342.8, "f174": 3.164, "f175": 13.58, "f176": 234.9, "f177": 11.46, "f178": 2.942, "f179": 13.97, "f180": 201.2, "f181": 11.48, "f182": 1.543, "f183": 14.69, "f184": 188.5, "f185": 12.04, "f186": 1.435, "f266": 0.222, "f267": 0.3089, "f268": 0.75, "f269": 0.525, "f270": 0.07353, "f271": 0.3, "f272": 1.2, "f274": 207.9, "f275": 1.043, "f276": 281.5, "f277": 1.145, "f278": 2000, "f279": 0.4965, "f283": 0.1876, "f284": 0.5506, "f285": 0.0101, "f286": 0, "f288": 1.543, "f289": 1.515, "f290": 4.704, "f291": 1.538, "f292": 1.546}, {"name": "Gemini 3.8 Flash (medium) AI Studio", "creator": "Google", "open_weights": false, "f6": 0.6089, "f7": 1107, "f8": 1090, "f9": 1122, "f10": 1182, "f11": 1174, "f12": 1192, "f13": 1192, "f14": 1176, "f15": 1209, "f16": 0.4111, "f17": 1182, "f18": 486.5, "f19": 0.9, "f20": 0.075, "f21": 0.75, "f22": 25209836, "f23": 8121908918, "f24": 83881685, "f25": 58671849, "f26": 39.95, "f27": 37.39, "f28": 41.73, "f29": 38.34, "f30": 41.63, "f31": 47.16, "f35": 1000000, "f36": 6.259, "f37": 0.1229, "f38": 0.44, "f40": 1.967, "f41": 71.02, "f42": 83.19, "f44": 30, "f78": 0.3713, "f79": 0.1647, "f81": 0.228, "f82": 1432, "f83": 1413, "f84": 1452, "f85": 0.9354, "f89": 0.4212, "f90": 0.291, "f91": 1, "f94": 29.98, "f95": 94.54, "f96": 206.6, "f97": 4018, "f98": 4232, "f99": 7.213, "f100": 314.6, "f101": 0.1307, "f102": 0.2926, "f103": 5.655, "f104": 5.951, "f105": 0.00332, "f106": 0.3078, "f107": 0.1771, "f108": 6.259, "f109": 220, "f110": 4547, "f111": 34840, "f112": 82070, "f113": 47230, "f116": 0.84, "f153": 0.1278, "f154": 0.8422, "f155": 1, "f156": 23.7, "f157": 0.4963, "f158": 0.5149, "f159": 0.4851, "f266": 0.5775, "f267": 0.7797, "f268": 2.25, "f269": 1.5, "f270": 0.1176, "f271": 0.75, "f272": 3.75, "f278": 0, "f279": 0.5509, "f283": 0.4577, "f284": 0.839, "f285": 0.197, "f286": 0.1048}, {"name": "Mercury 2.5", "creator": "Inception", "open_weights": false, "f6": 0.02354, "f17": 378.4, "f20": 0.02, "f35": 256000, "f37": 0, "f81": 0.036, "f82": 482.2, "f89": 0.1177, "f90": 0.051, "f116": 0.7167, "f155": 1, "f271": 0.2, "f272": 0.75, "f279": 0.3854, "f285": 0}, {"name": "Nova 2.0 Lite (non-reasoning)", "creator": "Amazon", "open_weights": false, "f3": 0.3367, "f35": 1000000, "f37": 0, "f85": 0.603, "f89": 0.02873, "f92": 0.4054, "f116": 0.1867, "f147": 0.346, "f148": 4.012, "f149": 173.1, "f151": 1.123, "f152": 1.123, "f154": 0.4902, "f155": 1, "f171": 127.8, "f172": 0.9218, "f173": 224.8, "f174": 2.472, "f271": 0.3, "f272": 2.5, "f274": 145.2, "f275": 0.9824, "f276": 197.3, "f277": 1.51, "f282": 0.6199, "f287": 0.06818}, {"name": "Nemotron 3 Nano", "creator": "NVIDIA", "open_weights": true, "f3": 0.91, "f6": 0.009715, "f17": 77.94, "f35": 262100, "f37": 0.008571, "f81": 0.01, "f82": 262.7, "f85": 0.7566, "f89": 0.114, "f90": 0.035, "f92": 0.7109, "f116": 0.38, "f147": 0.7407, "f148": 13.95, "f149": 196.3, "f150": 10.54, "f151": 11.31, "f152": 0.7724, "f155": 4, "f171": 117.8, "f172": 0.6757, "f173": 319.8, "f174": 4.054, "f271": 0.05, "f272": 0.2, "f274": 153.1, "f275": 0.7401, "f276": 273.6, "f277": 0.9454, "f279": 0.3056, "f282": 0.4094, "f283": 0.05979, "f284": 0.06742, "f285": 0, "f287": 0.1364}, {"name": "DeepSeek V4 Flash Vision (max)", "creator": "DeepSeek", "open_weights": false, "f6": 0.4747, "f17": 1420, "f20": 0.007, "f35": 1000000, "f37": 0.1086, "f45": 0.4709, "f81": 0.12, "f82": 1555, "f85": 0.9131, "f89": 0.3448, "f90": 0.211, "f116": 0.8133, "f148": 16.7, "f149": 172.5, "f150": 11.59, "f151": 13.84, "f152": 1.337, "f154": 0.748, "f155": 3, "f171": 142, "f172": 1.026, "f173": 212.8, "f174": 2.631, "f271": 0.216, "f272": 0.647, "f274": 155.1, "f275": 1.106, "f276": 198.6, "f277": 1.746, "f279": 0.4965, "f283": 0.4103, "f284": 0.7416, "f285": 0.1212}, {"name": "Claude Haiku 5.5 (max)", "creator": "Anthropic", "open_weights": false, "f0": 997.8, "f1": 967, "f2": 1028, "f4": 0.5375, "f6": 0.3541, "f7": 1897, "f8": 1876, "f9": 1918, "f10": 1575, "f11": 1565, "f12": 1586, "f13": 1433, "f14": 1416, "f15": 1452, "f16": 0.5232, "f17": 1575, "f18": 61.41, "f19": 0.9, "f20": 0.01, "f21": 0.125, "f22": 40754337, "f23": 14601345433, "f24": 297721915, "f25": 256967578, "f26": 44.35, "f27": 42.29, "f28": 43.56, "f29": 37.5, "f30": 38.67, "f31": 39.12, "f32": 1192, "f33": 1171, "f34": 1213, "f35": 1000000, "f36": 0.411, "f37": 0.1886, "f38": 0.41, "f43": 159.3, "f44": 60, "f78": 0.4181, "f79": 0.3493, "f80": 46.34, "f81": 0.208, "f82": 1628, "f83": 1606, "f84": 1650, "f86": 0.005556, "f87": 0.5848, "f88": 0.5836, "f89": 0.4439, "f90": 0.296, "f91": 6, "f94": 36.23, "f95": 20.38, "f96": 142.1, "f97": 46.65, "f98": 190.6, "f99": 1.871, "f100": 148.9, "f101": 0.02658, "f102": 0.2325, "f103": 0.06461, "f104": 0.298, "f105": 0.0008876, "f106": 0.113, "f107": 0.08641, "f108": 0.411, "f109": 128.5, "f110": 339.5, "f111": 53150, "f112": 226000, "f113": 172800, "f114": 600.4, "f116": 0.8267, "f148": 310.5, "f149": 236.1, "f151": 308.4, "f152": 308.4, "f153": 0.35, "f155": 1, "f156": 12.3, "f157": 0.3467, "f158": 0.3423, "f159": 0.6577, "f165": 236.1, "f166": 219.4, "f167": 271.7, "f168": 229.4, "f169": 244.2, "f171": 219.4, "f172": 147.8, "f173": 271.7, "f174": 442, "f175": 422.7, "f176": 244.2, "f177": 420.7, "f178": 420.7, "f179": 310.5, "f180": 236.1, "f181": 308.4, "f182": 308.4, "f183": 229.3, "f184": 237.3, "f185": 227.2, "f186": 227.2, "f187": 227, "f188": 231.1, "f189": 224.9, "f190": 224.9, "f191": 61, "f192": 75, "f193": 72, "f194": 86, "f195": 55, "f196": 70, "f197": 71, "f198": 85, "f199": 20, "f200": 52, "f201": 6, "f202": 9, "f203": 68, "f204": 82, "f205": 60, "f206": 74, "f207": 65.35, "f208": 80.2, "f209": 57.92, "f210": 75.25, "f211": 38.12, "f212": 8.425, "f213": 77.73, "f214": 67.83, "f215": 2.591, "f216": 13.96, "f217": 8.371, "f218": 2769, "f219": 5.173, "f220": 9.294, "f221": 0.05, "f222": 0.001111, "f223": 0.002222, "f224": 0.09222, "f225": 0.05, "f226": 0.2878, "f227": 0.9867, "f228": 1.851, "f229": 7.49, "f230": 3.238, "f231": 1.58, "f232": 6.283, "f233": 32.93, "f234": 0.06222, "f235": 444.4, "f236": 903.8, "f237": 950.1, "f238": 1114, "f239": 1152, "f240": 1203, "f241": 956.8, "f242": 824, "f243": 1091, "f244": 953.4, "f245": 1377, "f246": 1041, "f247": 1025, "f248": 954.9, "f249": 1603, "f250": 1438, "f251": 1067, "f252": 1251, "f253": 1142, "f254": 874.7, "f255": 1048, "f256": 1142, "f257": 1209, "f258": 1493, "f259": 966.6, "f260": 1247, "f261": 920.7, "f262": 919.8, "f263": 845.1, "f264": 1002, "f265": 873, "f266": 0.077, "f267": 0.104, "f268": 0.3, "f269": 0.2, "f270": 0.01569, "f271": 0.1, "f272": 0.5, "f274": 229.4, "f275": 199.2, "f276": 244.2, "f277": 378, "f278": 0, "f279": 0.5498, "f281": 162.1, "f285": 0.3283, "f286": 0.2, "f288": 308.4, "f289": 147.8, "f290": 442, "f291": 199.2, "f292": 378}, {"name": "GPT-6 Luna (high)", "creator": "OpenAI", "open_weights": false, "f6": 0.4782, "f7": 1176, "f8": 1158, "f9": 1193, "f10": 1186, "f11": 1178, "f12": 1195, "f13": 1296, "f14": 1281, "f15": 1311, "f16": 0.3182, "f17": 1186, "f18": 5.661, "f19": 0.9, "f20": 0.01, "f21": 0.125, "f22": 12065275, "f23": 2982538333, "f24": 40451607, "f25": 28386332, "f26": 29.85, "f27": 27.21, "f28": 29.26, "f29": 29.25, "f30": 26.66, "f31": 37.79, "f35": 762100, "f36": 0.07295, "f37": 0.1543, "f38": 0.305, "f44": 40, "f78": 0.3203, "f79": 0.186, "f81": 0.182, "f82": 1352, "f83": 1331, "f84": 1374, "f89": 0.3295, "f90": 0.156, "f91": 2, "f94": 21.38, "f95": 6.033, "f96": 28.7, "f97": 11.94, "f98": 42.35, "f99": 1.715, "f100": 20.23, "f101": 0.005611, "f102": 0.04327, "f103": 0.01245, "f104": 0.05653, "f105": 0.000815, "f106": 0.01642, "f107": 0.01081, "f108": 0.07295, "f109": 14.19, "f110": 62.58, "f111": 11220, "f112": 32840, "f113": 21620, "f114": 281.7, "f116": 0.7933, "f148": 15.18, "f149": 116.8, "f151": 10.9, "f152": 10.9, "f153": 0.1944, "f154": 0.7751, "f155": 2, "f156": -12.8, "f157": 0.39, "f158": 0.8492, "f159": 0.1508, "f165": 116.8, "f166": 87.96, "f167": 188.1, "f168": 99.98, "f169": 134.7, "f171": 87.96, "f172": 2.983, "f173": 188.1, "f174": 37.79, "f175": 28.91, "f176": 113.8, "f177": 24.51, "f178": 24.51, "f179": 15.18, "f180": 116.8, "f181": 10.9, "f182": 10.9, "f183": 16.25, "f184": 117.2, "f185": 11.99, "f186": 11.99, "f187": 11.31, "f188": 107.2, "f189": 6.651, "f190": 6.651, "f266": 0.077, "f267": 0.104, "f268": 0.3, "f269": 0.2, "f270": 0.01569, "f271": 0.1, "f272": 0.5, "f274": 99.98, "f275": 6.195, "f276": 134.7, "f277": 14.16, "f278": 0, "f279": 0.5035, "f285": 0.04545, "f286": 0.02857, "f288": 10.9, "f289": 2.983, "f290": 37.79, "f291": 6.195, "f292": 14.16}, {"name": "Qwen3.8 27B (low)", "creator": "Alibaba", "open_weights": true, "f6": 0.301, "f7": 1363, "f8": 1346, "f9": 1380, "f10": 1270, "f11": 1262, "f12": 1280, "f13": 1199, "f14": 1182, "f15": 1216, "f16": 0.4208, "f17": 1270, "f18": 206.8, "f19": 0.8, "f20": 0.1, "f22": 29559028, "f23": 6193510529, "f24": 77254919, "f25": 47695891, "f26": 27.97, "f27": 21.3, "f28": 28.33, "f29": 23.24, "f30": 27.35, "f31": 29.15, "f35": 1000000, "f36": 1.906, "f37": 0, "f38": 0.055, "f44": 20, "f78": 0.2889, "f79": 0.1237, "f81": 0.104, "f82": 1370, "f83": 1352, "f84": 1389, "f85": 0.8455, "f89": 0.1404, "f90": 0.068, "f91": 1, "f94": 15.69, "f95": 88.68, "f96": 467.1, "f97": 754.6, "f98": 1228, "f99": 6.543, "f100": 231.8, "f101": 0.08896, "f102": 0.6438, "f103": 1.019, "f104": 1.665, "f105": 0.003056, "f106": 0.2405, "f107": 0.1516, "f108": 1.906, "f109": 143.1, "f110": 1460, "f111": 29650, "f112": 80180, "f113": 50520, "f114": 1688, "f116": 0.7733, "f148": 60.61, "f149": 44.02, "f150": 45.43, "f151": 49.25, "f152": 3.825, "f153": 0.07778, "f154": 0.7376, "f155": 1, "f156": -21.47, "f157": 0.183, "f158": 0.4867, "f159": 0.5133, "f160": 6, "f161": 38.89, "f162": 1, "f163": 0, "f164": 0, "f165": 44.02, "f166": 34.46, "f167": 57.53, "f168": 38.97, "f169": 50.96, "f170": 27, "f171": 34.46, "f172": 3.623, "f173": 57.53, "f174": 5.159, "f175": 42.97, "f176": 95.78, "f177": 37.75, "f178": 16.87, "f179": 60.61, "f180": 44.02, "f181": 49.25, "f182": 3.825, "f183": 62.64, "f184": 40.7, "f185": 50.35, "f186": 1.214, "f187": 69.11, "f188": 36.89, "f189": 55.56, "f190": 1.347, "f266": 0.47, "f267": 0.5248, "f268": 1.75, "f269": 1.125, "f270": 0.1324, "f271": 0.5, "f272": 3, "f274": 38.97, "f275": 3.735, "f276": 50.96, "f277": 4.034, "f278": 2000, "f279": 0.4005, "f283": 0.3216, "f284": 0.6742, "f285": 0.02525, "f286": 0.004762, "f288": 3.825, "f289": 3.623, "f290": 5.159, "f291": 3.735, "f292": 4.034}, {"name": "Ling 3.0 Tiny", "creator": "InclusionAI", "open_weights": true, "f6": 0.002807, "f17": 475.9, "f35": 262144, "f37": 0, "f81": 0.008, "f82": 568.5, "f85": 0.7343, "f89": 0.09314, "f116": 0.6033, "f148": 46.76, "f149": 56.64, "f150": 35.31, "f151": 37.93, "f152": 2.621, "f153": 0.1, "f155": 1, "f156": -15.87, "f157": 0.3793, "f159": 0.1332, "f171": 50.3, "f172": 1.963, "f173": 59.43, "f174": 4.837, "f271": 0, "f272": 0, "f274": 54.62, "f275": 2.368, "f276": 58.74, "f277": 3.592, "f279": 0.2419, "f283": 0.2082, "f284": 0.2772, "f285": 0}, {"name": "Celeris-1", "creator": "Celeris", "open_weights": false, "f6": 0.004158, "f17": 151.9, "f20": 0.02, "f35": 131072, "f37": 0, "f81": 0.012, "f82": 309.9, "f85": 0.6313, "f89": 0.06812, "f90": 0.057, "f116": 0.38, "f148": 0.8553, "f149": 1663, "f151": 0.5546, "f152": 0.5546, "f155": 1, "f171": 1170, "f172": 0.453, "f173": 2407, "f174": 1.03, "f271": 0.2, "f272": 0.7, "f274": 1409, "f275": 0.5088, "f276": 1840, "f277": 0.6499, "f279": 0.2164, "f283": 0.03918, "f284": 0.1124, "f285": 0}, {"name": "Tiny Aya Global", "creator": "Cohere", "open_weights": true, "f35": 8192, "f37": 0, "f85": 0.3051, "f89": 0.05236, "f92": 0.2014, "f116": 0, "f155": 1, "f271": 0, "f272": 0, "f282": 0, "f287": 0}, {"name": "Hermes 4 405B (FP8)", "creator": "Nous Research", "open_weights": true, "f3": 0.6967, "f35": 128000, "f37": 0.002857, "f46": 16.42, "f47": 12.38, "f48": 10.73, "f49": 12, "f50": 10.23, "f51": 13.88, "f52": 14.16, "f53": 13.69, "f54": 11.96, "f55": 12.31, "f56": 9, "f57": 13.54, "f58": 10.88, "f59": 11.46, "f60": 12.5, "f61": 13.85, "f62": 13, "f85": 0.7273, "f89": 0.1089, "f92": 0.3272, "f116": 0.2233, "f147": 0.6857, "f148": 65.56, "f149": 39.58, "f150": 50.53, "f151": 52.93, "f152": 2.392, "f155": 1, "f171": 23.24, "f172": 2.215, "f173": 45.62, "f174": 3.422, "f271": 1, "f272": 3, "f274": 32.42, "f275": 2.244, "f276": 43.39, "f277": 2.609, "f282": 0.2222, "f287": 0.1136}, {"name": "DeepSeek V4 Pro 0813 (max)", "creator": "DeepSeek", "open_weights": true, "f6": 0.5671, "f7": 1375, "f8": 1361, "f9": 1389, "f10": 1254, "f11": 1247, "f12": 1262, "f13": 1121, "f14": 1107, "f15": 1134, "f16": 0.4352, "f17": 1254, "f18": 90.59, "f19": 0.9667, "f20": 0.04, "f22": 31652744, "f23": 13018774693, "f24": 119481098, "f25": 87828354, "f26": 30.64, "f27": 29.85, "f28": 30.39, "f30": 27.52, "f31": 41.09, "f35": 1049000, "f36": 1.494, "f37": 0.18, "f38": 0.235, "f40": 0.2414, "f41": 62.83, "f42": 88.5, "f43": 155.7, "f44": 60, "f45": 0.496, "f46": 17.58, "f47": 12.92, "f48": 11.96, "f49": 11.31, "f50": 12.04, "f51": 15.73, "f52": 17.29, "f53": 16.38, "f54": 15.23, "f55": 13.92, "f56": 8.5, "f57": 15.04, "f58": 10.23, "f59": 12.58, "f60": 14.5, "f61": 13.69, "f62": 14.38, "f63": 6.33, "f64": 5.22, "f65": 4.78, "f66": 5.86, "f67": 3.83, "f68": 5.57, "f69": 1156, "f70": 5.14, "f71": 4.8, "f72": 5.72, "f73": 5.58, "f74": 4.96, "f75": 6.23, "f76": 7.68, "f77": 6.67, "f78": 0.388, "f79": 0.1707, "f80": 26.83, "f81": 0.114, "f82": 1457, "f83": 1438, "f84": 1476, "f85": 0.9283, "f89": 0.4101, "f90": 0.195, "f91": 10, "f93": 49, "f94": 23.06, "f95": 125.3, "f96": 560.6, "f97": 362.5, "f98": 928.7, "f99": 5.681, "f100": 473.1, "f101": 0.1506, "f102": 0.9052, "f103": 0.4706, "f104": 1.378, "f105": 0.002291, "f106": 0.391, "f107": 0.2404, "f108": 1.769, "f109": 347.8, "f110": 1402, "f111": 38020, "f112": 98730, "f113": 60710, "f114": 866.9, "f116": 0.8033, "f117": 98, "f118": 42.63, "f119": 69.56, "f120": 70.42, "f121": 69.99, "f122": 98, "f123": 75.42, "f124": 74.54, "f125": 62.35, "f126": 78, "f127": 54.55, "f128": 78.13, "f129": 64, "f130": 96.08, "f131": 90.68, "f132": 90.62, "f133": 56.22, "f134": 56.39, "f135": 50, "f136": 82.69, "f137": 55.93, "f138": 94, "f139": 67.75, "f140": 69.5, "f141": 48.19, "f142": 100, "f143": 80.77, "f144": 23.33, "f145": 80, "f146": 92, "f148": 36.75, "f149": 71.39, "f150": 28.04, "f151": 29.78, "f152": 1.646, "f155": 10, "f156": -6.367, "f157": 0.452, "f158": 0.941, "f159": 0.059, "f160": 6, "f161": 44.44, "f162": 2, "f163": 0, "f164": 0, "f165": 74.42, "f166": 42.57, "f167": 148.5, "f168": 59.92, "f169": 135.5, "f170": 1600, "f171": 53.27, "f172": 1.311, "f173": 148.6, "f174": 2.884, "f175": 33.32, "f176": 102.9, "f177": 28.46, "f178": 9.012, "f179": 35.23, "f180": 74.42, "f181": 28.51, "f182": 1.636, "f183": 33.59, "f184": 76.88, "f185": 27.09, "f186": 1.073, "f187": 43.26, "f188": 59.27, "f189": 34.83, "f190": 1.083, "f266": 0.6908, "f267": 1.346, "f268": 2.64, "f269": 1.98, "f270": 0.0949, "f271": 0.5, "f272": 2, "f274": 59.26, "f275": 1.518, "f276": 120.6, "f277": 1.856, "f278": 2000, "f279": 0.5104, "f280": 50.9, "f281": 153, "f283": 0.3959, "f284": 0.7865, "f285": 0.1414, "f286": 0.05714, "f288": 1.636, "f289": 1.126, "f290": 2.953, "f291": 1.478, "f292": 1.848}, {"name": "Qwen3.6 35B A3B", "creator": "Alibaba", "open_weights": true, "f6": 0.05209, "f17": 713.2, "f35": 262100, "f37": 0.002857, "f43": 143.8, "f81": 0.066, "f82": 899.9, "f85": 0.8414, "f89": 0.2224, "f90": 0.069, "f92": 0.6435, "f116": 0.7167, "f148": 49.15, "f149": 122.9, "f150": 43.98, "f151": 45.07, "f152": 1.17, "f153": 0.05, "f154": 0.7503, "f155": 8, "f171": 77.74, "f172": 1.021, "f173": 175.3, "f174": 1.741, "f271": 0.1, "f272": 0.95, "f274": 103.9, "f275": 1.094, "f276": 153.7, "f277": 1.275, "f279": 0.3657, "f281": 143.7, "f282": 0.9532, "f283": 0.09278, "f284": 0.4494, "f285": 0, "f287": 0.3485}, {"name": "Apertus 8B Instruct", "creator": "Swiss AI Initiative", "open_weights": true, "f35": 64000, "f37": 0, "f85": 0.2556, "f89": 0.04958, "f92": 0.2238, "f116": 0, "f148": 6.476, "f149": 148.2, "f151": 3.102, "f152": 3.102, "f155": 1, "f171": 91.25, "f172": 2.087, "f173": 173.5, "f174": 4.121, "f271": 0.1, "f272": 0.2, "f274": 125.6, "f275": 2.552, "f276": 167.2, "f277": 3.622, "f282": 0.114, "f287": 0}, {"name": "Gemini 3.8 Flash (high) AI Studio", "creator": "Google", "open_weights": false, "f0": 966.1, "f1": 935, "f2": 997, "f4": 0.4625, "f6": 0.5993, "f7": 1137, "f8": 1119, "f9": 1152, "f10": 1202, "f11": 1194, "f12": 1211, "f13": 1225, "f14": 1211, "f15": 1239, "f16": 0.4212, "f17": 1202, "f18": 684.5, "f19": 0.9, "f20": 0.075, "f21": 0.75, "f22": 27841966, "f23": 10163543607, "f24": 125659345, "f25": 97817379, "f26": 40.82, "f27": 38.49, "f28": 42.38, "f29": 38.26, "f30": 41.74, "f31": 46.52, "f32": 899.1, "f33": 879, "f34": 919, "f35": 1000000, "f36": 7.766, "f37": 0.1829, "f38": 0.435, "f39": 39.6, "f40": 2.362, "f41": 73.83, "f42": 85.84, "f43": 157.4, "f44": 40, "f78": 0.3636, "f79": 0.1874, "f80": 21.95, "f81": 0.21, "f82": 1445, "f83": 1426, "f84": 1465, "f85": 0.9525, "f86": 0, "f87": 0.4838, "f88": 0.5169, "f89": 0.4782, "f90": 0.331, "f91": 4, "f94": 30.55, "f95": 104.4, "f96": 258.9, "f97": 5027, "f98": 5293, "f99": 6.786, "f100": 471.2, "f101": 0.1458, "f102": 0.364, "f103": 7.028, "f104": 7.395, "f105": 0.003101, "f106": 0.371, "f107": 0.2253, "f108": 7.766, "f109": 366.8, "f110": 5764, "f111": 38870, "f112": 98940, "f113": 60070, "f114": 745.3, "f115": 0.5254, "f116": 0.8133, "f148": 28.24, "f149": 129, "f151": 24.36, "f152": 24.36, "f153": 0.1056, "f154": 0.8561, "f155": 1, "f156": 23.27, "f157": 0.5053, "f158": 0.5512, "f159": 0.4488, "f165": 129, "f166": 94.28, "f167": 167.5, "f168": 109.1, "f169": 157.3, "f171": 94.28, "f172": 14.39, "f173": 167.5, "f174": 45.13, "f175": 69.23, "f176": 148.1, "f177": 65.85, "f178": 65.85, "f179": 28.24, "f180": 129, "f181": 24.36, "f182": 24.36, "f183": 21.94, "f184": 127.2, "f185": 18.01, "f186": 18.01, "f187": 21.37, "f188": 103.6, "f189": 16.54, "f190": 16.54, "f191": 72, "f192": 91, "f193": 71, "f194": 82, "f195": 22, "f196": 39, "f197": 72, "f198": 86, "f199": 55, "f200": 78, "f201": 72, "f202": 82, "f203": 16, "f204": 22, "f205": 50, "f206": 58, "f207": 82.67, "f208": 75.25, "f209": 35.65, "f210": 82.67, "f211": 67.83, "f212": 77.73, "f213": 18.32, "f214": 52.98, "f215": 4.367, "f216": 15.61, "f217": 19.73, "f218": 4920, "f219": 18.86, "f220": 5.756, "f221": 0.15, "f222": 2.442, "f223": 0.01889, "f224": 0.01556, "f225": 0.3244, "f226": 6.489, "f227": 7.123, "f228": 4.938, "f229": 11.38, "f230": 10.64, "f231": 3.414, "f232": 17.81, "f233": 49.14, "f234": 0.1122, "f235": 749.1, "f236": 264.9, "f237": 778.2, "f238": 1560, "f239": 1280, "f240": 1358, "f241": 447.4, "f242": 578.2, "f243": 1336, "f244": 896.5, "f245": 1093, "f246": 792.1, "f247": 896.8, "f248": 1416, "f249": 1342, "f250": 1254, "f251": 881.4, "f252": 1740, "f253": 692.3, "f254": 383, "f255": 1183, "f256": 1140, "f257": 1539, "f258": 1685, "f259": 1424, "f260": 428.1, "f261": 1767, "f262": 1041, "f263": 883.3, "f264": 910.8, "f265": 462.9, "f266": 0.5775, "f267": 0.7797, "f268": 2.25, "f269": 1.5, "f270": 0.1176, "f271": 0.75, "f272": 3.75, "f274": 109.1, "f275": 19.62, "f276": 157.3, "f277": 30.39, "f278": 0, "f279": 0.566, "f280": 82.4, "f281": 158.1, "f283": 0.4495, "f284": 0.8764, "f285": 0.197, "f286": 0.1, "f288": 24.36, "f289": 14.39, "f290": 45.13, "f291": 19.62, "f292": 30.39}, {"name": "Nemotron 3 Nano Omni 30B A3B", "creator": "NVIDIA", "open_weights": true, "f20": 0.1, "f35": 163800, "f37": 0, "f82": 237.3, "f85": 0.4687, "f89": 0.04819, "f92": 0.632, "f116": 0.3967, "f148": 11.42, "f149": 231.6, "f150": 8.636, "f151": 9.265, "f152": 0.6291, "f154": 0.5318, "f155": 2, "f171": 198.3, "f172": 0.5317, "f173": 250.7, "f174": 1.077, "f271": 0.5, "f272": 0.9, "f274": 208.8, "f275": 0.5754, "f276": 239.5, "f277": 0.6682, "f282": 0.4532, "f284": 0.06742, "f287": 0.08333}, {"name": "Kimi K2.7 Code (FP4)", "creator": "Kimi", "open_weights": true, "f6": 0.2445, "f17": 858.3, "f20": 0.136, "f35": 259100, "f37": 0.1, "f40": 2.816, "f41": 30.53, "f42": 61.06, "f43": 150.1, "f45": 0.4023, "f80": 12.2, "f81": 0.112, "f82": 1046, "f85": 0.896, "f89": 0.3503, "f90": 0.148, "f92": 0.6313, "f116": 0.7933, "f117": 97, "f118": 45.66, "f119": 76.09, "f120": 71.83, "f121": 73.96, "f122": 98, "f123": 48.28, "f124": 62.66, "f125": 56.29, "f126": 37, "f127": 63.64, "f128": 77.91, "f129": 74, "f130": 94.12, "f131": 79.6, "f132": 90.3, "f133": 48.53, "f134": 55.72, "f135": 50, "f136": 82.81, "f137": 49.75, "f138": 92, "f139": 68.57, "f140": 58.32, "f141": 47.54, "f142": 92.16, "f143": 69.23, "f144": 23.33, "f145": 80, "f146": 96, "f148": 51.25, "f149": 58.43, "f150": 38.34, "f151": 42.65, "f152": 2.133, "f153": 0.1222, "f155": 6, "f171": 31.86, "f172": 1.868, "f173": 126.6, "f174": 4.713, "f271": 0.68, "f272": 3.4, "f274": 45.13, "f275": 2.002, "f276": 83.46, "f277": 2.59, "f279": 0.478, "f280": 57.9, "f281": 149.7, "f282": 0.9006, "f283": 0.2021, "f284": 0.6742, "f285": 0.0101, "f287": 0.447}, {"name": "Qwen3.8 2.4T A95B", "creator": "Alibaba", "open_weights": true, "f6": 0.5725, "f17": 1431, "f20": 0.25, "f35": 262100, "f37": 0.2, "f45": 0.4736, "f81": 0.156, "f82": 1616, "f85": 0.9354, "f89": 0.4245, "f116": 0.8033, "f148": 32.22, "f149": 82.6, "f150": 24.9, "f151": 25.99, "f152": 0.8997, "f153": 0.3056, "f155": 6, "f156": 7.767, "f157": 0.314, "f159": 0.6555, "f171": 42.96, "f172": 0.7779, "f173": 133.5, "f174": 5.401, "f271": 2, "f272": 6, "f274": 54.05, "f275": 0.8099, "f276": 116.3, "f277": 1.266, "f279": 0.5405, "f280": 62.5, "f283": 0.4907, "f284": 0.8202, "f285": 0.1111}, {"name": "Gemini 4 Carbon (high)", "creator": "Google", "open_weights": false, "f6": 0.7782, "f7": 1672, "f8": 1651, "f9": 1692, "f10": 1610, "f11": 1601, "f12": 1622, "f13": 1599, "f14": 1579, "f15": 1619, "f16": 0.6182, "f17": 1610, "f18": 742.7, "f19": 0.95, "f20": 0.2, "f21": 4, "f22": 36882628, "f23": 7622675256, "f24": 204759670, "f25": 167877042, "f26": 60.97, "f27": 64.71, "f28": 62.62, "f30": 61.96, "f31": 60.94, "f35": 1000000, "f36": 7.756, "f37": 0.36, "f38": 0.63, "f44": 40, "f78": 0.4852, "f79": 0.4056, "f81": 0.284, "f82": 1733, "f83": 1708, "f84": 1757, "f89": 0.6038, "f90": 0.691, "f91": 1, "f94": 59.43, "f95": 737.7, "f96": 1387, "f97": 2427, "f98": 4144, "f99": 331, "f100": 4095, "f101": 1.012, "f102": 2.039, "f103": 3.214, "f104": 5.3, "f105": 0.04703, "f106": 2.455, "f107": 1.444, "f108": 7.756, "f109": 3358, "f110": 8240, "f111": 50590, "f112": 122800, "f113": 72180, "f114": 1453, "f116": 0.7933, "f148": 103.8, "f149": 84.94, "f151": 97.94, "f152": 97.94, "f155": 1, "f156": 53.5, "f157": 0.5827, "f158": 0.1142, "f159": 0.8858, "f165": 84.94, "f166": 68.24, "f167": 116.1, "f168": 73.62, "f169": 102.5, "f171": 68.24, "f172": 51.79, "f173": 116.1, "f174": 211.6, "f175": 118.9, "f176": 86.47, "f177": 113.1, "f178": 113.1, "f179": 103.8, "f180": 84.94, "f181": 97.94, "f182": 97.94, "f183": 67.14, "f184": 87.74, "f185": 61.44, "f186": 61.44, "f187": 78.33, "f188": 98.51, "f189": 73.25, "f190": 73.25, "f266": 2.94, "f267": 4.158, "f268": 12, "f269": 8, "f270": 0.4314, "f271": 4, "f272": 20, "f274": 73.62, "f275": 91.02, "f276": 102.5, "f277": 136.7, "f278": 0, "f279": 0.6424, "f285": 0.6515, "f286": 0.6476, "f288": 97.94, "f289": 51.79, "f290": 211.6, "f291": 91.02, "f292": 136.7}, {"name": "Llama 4 Maverick (FP8)", "creator": "Meta", "open_weights": true, "f3": 0.1933, "f6": 0.002122, "f17": 0, "f35": 588300, "f37": 0, "f43": 132.2, "f46": 10.35, "f47": 6.92, "f48": 5.65, "f49": 13.58, "f50": 6.69, "f51": 9, "f52": 7.51, "f53": 7.62, "f54": 6.58, "f55": 5.85, "f56": 6.65, "f57": 7.5, "f58": 9.15, "f59": 8.85, "f60": 6.96, "f61": 11.92, "f62": 10.31, "f81": 0.008, "f82": -267.4, "f85": 0.6707, "f89": 0.04912, "f92": 0.4299, "f116": 0.5, "f147": 0.3968, "f148": 12.03, "f149": 45.34, "f151": 0.924, "f152": 0.924, "f154": 0.6214, "f155": 6, "f171": 27.21, "f172": 0.7799, "f173": 69.46, "f174": 1.626, "f271": 0.2, "f272": 0.8, "f274": 37.86, "f275": 0.8561, "f276": 55.12, "f277": 1.157, "f279": 0.3171, "f280": 27.7, "f281": 129.2, "f282": 0.1784, "f283": 0.03711, "f284": 0.07865, "f285": 0, "f287": 0.06818}, {"name": "GPT-6 Sol (Daybreak Blue, max)", "creator": "OpenAI", "open_weights": false, "f20": 0.2, "f21": 2.5, "f35": 1050000, "f155": 1, "f271": 2, "f272": 10}, {"name": "Ministral 3 8B", "creator": "Mistral", "open_weights": true, "f3": 0.3167, "f6": 0.005167, "f17": 77.94, "f35": 259100, "f37": 0, "f81": 0.008, "f82": 221.5, "f85": 0.4707, "f89": 0.04263, "f90": 0.044, "f92": 0.2912, "f116": 0.2567, "f147": 0.3026, "f148": 4.652, "f149": 168.6, "f151": 0.8826, "f152": 0.8826, "f153": 0, "f154": 0.4595, "f155": 2, "f171": 126.3, "f172": 0.778, "f173": 208.3, "f174": 1.513, "f271": 0.15, "f272": 0.15, "f274": 149.9, "f275": 0.818, "f276": 192.2, "f277": 1.004, "f279": 0.2072, "f282": 0.2661, "f283": 0.03711, "f284": 0.0412, "f285": 0, "f287": 0.04545}, {"name": "Claude Sonnet 5.5 (xhigh with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.6552, "f7": 2009, "f8": 1988, "f9": 2031, "f10": 1743, "f11": 1731, "f12": 1756, "f13": 1647, "f14": 1624, "f15": 1675, "f16": 0.6222, "f17": 1743, "f18": 634.8, "f19": 0.95, "f20": 0.1, "f21": 2.5, "f22": 35633256, "f23": 11231204205, "f24": 110709101, "f25": 75075845, "f26": 50.25, "f27": 53.48, "f28": 48.52, "f29": 47.39, "f30": 47.38, "f31": 54.09, "f35": 1000000, "f36": 4.092, "f37": 0.3114, "f38": 0.54, "f44": 50, "f78": 0.4615, "f79": 0.3565, "f81": 0.246, "f82": 1735, "f83": 1711, "f84": 1758, "f89": 0.5, "f90": 0.441, "f91": 1, "f94": 49.57, "f95": 356.3, "f96": 1095, "f97": 663, "f98": 1795, "f99": 37.7, "f100": 1107, "f101": 0.4321, "f102": 1.896, "f103": 0.9564, "f104": 2.87, "f105": 0.01784, "f106": 1.222, "f107": 0.79, "f108": 4.092, "f109": 750.8, "f110": 2902, "f111": 43210, "f112": 122200, "f113": 79000, "f114": 710.3, "f116": 0.7967, "f148": 31.31, "f149": 107.8, "f151": 26.67, "f152": 26.67, "f153": 0.2056, "f155": 1, "f156": 20.6, "f157": 0.509, "f158": 0.6171, "f159": 0.3829, "f165": 107.8, "f166": 85.16, "f167": 137.4, "f168": 93.21, "f169": 123.5, "f171": 85.16, "f172": 13.58, "f173": 137.4, "f174": 98.59, "f175": 182.3, "f176": 151.1, "f177": 179, "f178": 179, "f179": 31.31, "f180": 107.8, "f181": 26.67, "f182": 26.67, "f183": 17.54, "f184": 104, "f185": 12.73, "f186": 12.73, "f187": 17.27, "f188": 83.88, "f189": 11.31, "f190": 11.31, "f266": 1.47, "f267": 2.079, "f268": 6, "f269": 4, "f270": 0.2157, "f271": 2, "f272": 10, "f274": 93.21, "f275": 17.32, "f276": 123.5, "f277": 38.53, "f278": 0, "f279": 0.5729, "f285": 0.5707, "f286": 0.5238, "f288": 26.67, "f289": 13.58, "f290": 98.59, "f291": 17.32, "f292": 38.53}, {"name": "Llama 3.3 70B", "creator": "Meta", "open_weights": true, "f3": 0.07667, "f35": 128000, "f37": 0, "f43": 127.3, "f82": -166.1, "f85": 0.498, "f89": 0.0356, "f92": 0.4707, "f115": 0.00565, "f116": 0.1567, "f147": 0.2878, "f148": 7.448, "f149": 86.49, "f151": 1.835, "f152": 1.835, "f155": 9, "f171": 59.85, "f172": 1.584, "f173": 96.22, "f174": 2.497, "f271": 0.1, "f272": 0.32, "f274": 80.91, "f275": 1.607, "f276": 94.41, "f277": 2.096, "f280": 19.9, "f282": 0.2661, "f284": 0.04869, "f287": 0.0303}, {"name": "Qwen3.8-Flash-Next", "creator": "Alibaba", "open_weights": true, "f6": 0.5591, "f17": 1574, "f20": 0.016, "f35": 1000000, "f37": 0.1114, "f81": 0.156, "f82": 1637, "f85": 0.9232, "f89": 0.3804, "f90": 0.163, "f116": 0.7967, "f148": 46.44, "f149": 56.49, "f150": 35.4, "f151": 37.59, "f152": 2.185, "f153": 0.2056, "f154": 0.7977, "f155": 1, "f156": -12.23, "f157": 0.2353, "f159": 0.5323, "f171": 43.9, "f172": 1.811, "f173": 75.72, "f174": 3.002, "f271": 0.15, "f272": 0.47, "f274": 49.04, "f275": 1.941, "f276": 65.51, "f277": 2.461, "f279": 0.5058, "f283": 0.4536, "f284": 0.8614, "f285": 0.2525}, {"name": "Claude Fable 5.1 (xhigh with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.5777, "f7": 1915, "f8": 1901, "f9": 1932, "f10": 1650, "f11": 1642, "f12": 1658, "f13": 1478, "f14": 1463, "f15": 1492, "f16": 0.6061, "f17": 1650, "f18": 1619, "f19": 0.975, "f20": 0.25, "f21": 12.5, "f22": 36718561, "f23": 7729073226, "f24": 114929206, "f25": 78210645, "f26": 57.94, "f27": 56.88, "f28": 53.51, "f29": 50.54, "f30": 53.73, "f31": 56.43, "f35": 1000000, "f36": 10.85, "f37": 0.3114, "f38": 0.565, "f44": 50, "f79": 0.3573, "f81": 0.262, "f82": 1740, "f83": 1721, "f84": 1759, "f85": 0.9343, "f89": 0.5871, "f90": 0.588, "f91": 1, "f94": 49.67, "f95": 1815, "f96": 1921, "f97": 2321, "f98": 4426, "f99": 184.5, "f100": 5671, "f101": 2.027, "f102": 3.064, "f103": 2.918, "f104": 6.07, "f105": 0.0875, "f106": 4.777, "f107": 2.75, "f108": 10.85, "f109": 3856, "f110": 10100, "f111": 41120, "f112": 97060, "f113": 55940, "f114": 976.2, "f116": 0.83, "f148": 63.07, "f149": 63.74, "f151": 55.22, "f152": 55.22, "f153": 0.1333, "f155": 1, "f156": 44.33, "f157": 0.6717, "f158": 0.6954, "f159": 0.3046, "f165": 63.74, "f166": 42.91, "f167": 70.26, "f168": 50.3, "f169": 68.42, "f171": 42.91, "f172": 15.37, "f173": 70.26, "f174": 185.5, "f175": 182.2, "f176": 79.19, "f177": 175.9, "f178": 175.9, "f179": 63.07, "f180": 63.74, "f181": 55.22, "f182": 55.22, "f183": 47.63, "f184": 62.72, "f185": 39.66, "f186": 39.66, "f187": 39.56, "f188": 41.52, "f189": 27.52, "f190": 27.52, "f266": 7.175, "f267": 10.4, "f268": 30, "f269": 20, "f270": 0.8333, "f271": 10, "f272": 50, "f274": 50.3, "f275": 22.92, "f276": 68.42, "f277": 111.2, "f278": 0, "f279": 0.6088, "f283": 0.4577, "f284": 0.9101, "f285": 0.5505, "f286": 0.4048, "f288": 55.22, "f289": 15.37, "f290": 185.5, "f291": 22.92, "f292": 111.2}, {"name": "Claude Fable 5.1 (high with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.5532, "f7": 1826, "f8": 1812, "f9": 1842, "f10": 1577, "f11": 1569, "f12": 1585, "f13": 1410, "f14": 1397, "f15": 1425, "f16": 0.5717, "f17": 1577, "f18": 1037, "f19": 0.975, "f20": 0.25, "f21": 12.5, "f22": 29918695, "f23": 5124181774, "f24": 69641442, "f25": 39722747, "f26": 53.73, "f27": 54.15, "f28": 49.61, "f29": 47.89, "f30": 49.82, "f31": 53.79, "f35": 1000000, "f36": 7.54, "f37": 0.3029, "f38": 0.605, "f44": 40, "f79": 0.303, "f81": 0.268, "f82": 1645, "f83": 1627, "f84": 1663, "f85": 0.9061, "f89": 0.5593, "f90": 0.504, "f91": 1, "f94": 47.02, "f95": 1484, "f96": 1269, "f97": 1725, "f98": 3178, "f99": 184.4, "f100": 3439, "f101": 1.583, "f102": 2.082, "f103": 2.115, "f104": 4.285, "f105": 0.0875, "f106": 3.255, "f107": 1.672, "f108": 7.54, "f109": 1956, "f110": 6618, "f111": 32000, "f112": 66030, "f113": 34030, "f114": 703, "f116": 0.8367, "f148": 15.02, "f149": 58.37, "f151": 6.452, "f152": 6.452, "f153": 0.1556, "f155": 1, "f156": 39.93, "f157": 0.647, "f158": 0.7016, "f159": 0.2984, "f165": 58.37, "f166": 41.86, "f167": 71.81, "f168": 46.19, "f169": 68.72, "f171": 41.86, "f172": 1.037, "f173": 71.81, "f174": 30.95, "f175": 44.8, "f176": 75.76, "f177": 38.2, "f178": 38.2, "f179": 15.02, "f180": 58.37, "f181": 6.452, "f182": 6.452, "f183": 11.33, "f184": 56.34, "f185": 2.454, "f186": 2.454, "f187": 14.05, "f188": 40.21, "f189": 1.618, "f190": 1.618, "f266": 7.175, "f267": 10.4, "f268": 30, "f269": 20, "f270": 0.8333, "f271": 10, "f272": 50, "f274": 46.19, "f275": 2.87, "f276": 68.72, "f277": 22.48, "f278": 0, "f279": 0.5868, "f283": 0.4309, "f284": 0.8989, "f285": 0.5202, "f286": 0.3952, "f288": 6.452, "f289": 1.037, "f290": 30.95, "f291": 2.87, "f292": 22.48}, {"name": "Phi-4 Mini", "creator": "Microsoft", "open_weights": true, "f3": 0.06667, "f35": 128000, "f37": 0, "f82": -400.8, "f85": 0.3313, "f89": 0.0445, "f92": 0.2109, "f116": 0.1533, "f147": 0.1259, "f148": 11.85, "f149": 45.63, "f151": 0.8945, "f152": 0.8945, "f155": 1, "f171": 22.83, "f172": 0.8258, "f173": 47.51, "f174": 2.479, "f271": 0.075, "f272": 0.3, "f274": 43.07, "f275": 0.8513, "f276": 46.59, "f277": 1.032, "f282": 0.08187, "f284": 0.003745, "f287": 0}, {"name": "Nova 2.0 Pro Preview (non-reasoning)", "creator": "Amazon", "open_weights": false, "f3": 0.3067, "f35": 256000, "f37": 0, "f82": 339.2, "f85": 0.6364, "f89": 0.03939, "f92": 0.5204, "f116": 0.3, "f147": 0.473, "f148": 5.342, "f149": 116.8, "f151": 1.063, "f152": 1.063, "f155": 1, "f171": 102.2, "f172": 0.9284, "f173": 142.1, "f174": 4.46, "f271": 1.25, "f272": 10, "f274": 109.8, "f275": 1.01, "f276": 131.8, "f277": 1.246, "f282": 0.7164, "f284": 0.1723, "f287": 0.1667}, {"name": "GPT-6.1 Sol (medium)", "creator": "OpenAI", "open_weights": false, "f6": 0.6257, "f7": 1537, "f8": 1518, "f9": 1554, "f10": 1361, "f11": 1351, "f12": 1371, "f13": 1264, "f14": 1246, "f15": 1282, "f16": 0.4404, "f17": 1361, "f18": 42.26, "f19": 0.95, "f20": 0.1, "f21": 2.5, "f22": 9936552, "f23": 852101014, "f24": 15120833, "f25": 5184281, "f26": 50.27, "f27": 51.85, "f28": 50.6, "f29": 45.82, "f30": 49, "f31": 53.26, "f35": 1000000, "f36": 0.3594, "f37": 0.2771, "f38": 0.65, "f44": 30, "f78": 0.4333, "f79": 0.3339, "f81": 0.3, "f82": 1459, "f83": 1438, "f84": 1481, "f89": 0.4986, "f90": 0.46, "f91": 1, "f94": 46.15, "f95": 99.37, "f96": 78.51, "f97": 124.5, "f98": 237.4, "f99": 34.3, "f100": 151.2, "f101": 0.08714, "f102": 0.0967, "f103": 0.1112, "f104": 0.2242, "f105": 0.0163, "f106": 0.1352, "f107": 0.04805, "f108": 0.3594, "f109": 51.84, "f110": 388.6, "f111": 8714, "f112": 13520, "f113": 4805, "f114": 236.4, "f116": 0.8333, "f148": 11.96, "f149": 58.67, "f151": 3.437, "f152": 3.437, "f153": 0.3222, "f154": 0.8393, "f155": 1, "f156": 40.17, "f157": 0.596, "f158": 0.481, "f159": 0.519, "f165": 58.67, "f166": 37.35, "f167": 81.43, "f168": 42.92, "f169": 72.76, "f171": 37.35, "f172": 2.07, "f173": 81.43, "f174": 15.92, "f175": 30.66, "f176": 56.42, "f177": 21.8, "f178": 21.8, "f179": 11.96, "f180": 58.67, "f181": 3.437, "f182": 3.437, "f183": 12.42, "f184": 57.05, "f185": 3.657, "f186": 3.657, "f187": 13.32, "f188": 44.31, "f189": 2.039, "f190": 2.039, "f266": 1.47, "f267": 2.079, "f268": 6, "f269": 4, "f270": 0.2157, "f271": 2, "f272": 10, "f274": 42.92, "f275": 2.874, "f276": 72.76, "f277": 6.54, "f278": 0, "f279": 0.5324, "f285": 0.4798, "f286": 0.3714, "f288": 3.437, "f289": 2.07, "f290": 15.92, "f291": 2.874, "f292": 6.54}, {"name": "GPT-6 Astra (low)", "creator": "OpenAI", "open_weights": false, "f6": 0.591, "f7": 1397, "f8": 1381, "f9": 1414, "f10": 1255, "f11": 1247, "f12": 1263, "f13": 1156, "f14": 1141, "f15": 1171, "f16": 0.402, "f17": 1255, "f18": 131.3, "f19": 0.9, "f20": 1, "f21": 12.5, "f22": 7460991, "f23": 552354629, "f24": 10270307, "f25": 2809316, "f26": 47.83, "f27": 49.52, "f28": 48.12, "f29": 44.98, "f30": 47.69, "f31": 49.88, "f35": 762100, "f36": 1.424, "f37": 0.2629, "f38": 0.6, "f40": 1.595, "f41": 67.04, "f42": 79.65, "f44": 20, "f79": 0.2622, "f81": 0.304, "f82": 1403, "f83": 1383, "f84": 1423, "f85": 0.9313, "f89": 0.4921, "f90": 0.451, "f91": 2, "f94": 43.03, "f95": 373, "f96": 497.7, "f97": 466, "f98": 1137, "f99": 173.5, "f100": 513.5, "f101": 0.2911, "f102": 0.5123, "f103": 0.3727, "f104": 0.9674, "f105": 0.08252, "f106": 0.4563, "f107": 0.1652, "f108": 1.424, "f109": 140.5, "f110": 1651, "f111": 5821, "f112": 9126, "f113": 3304, "f114": 152.2, "f116": 0.8, "f148": 11.43, "f149": 53.11, "f151": 1.881, "f152": 1.881, "f153": 0.3389, "f154": 0.8462, "f155": 2, "f156": 40.3, "f157": 0.586, "f158": 0.442, "f159": 0.558, "f165": 59.41, "f166": 41.31, "f167": 86.36, "f168": 47.74, "f169": 75.73, "f171": 40.71, "f172": 1.226, "f173": 78.19, "f174": 5.323, "f175": 12.7, "f176": 76.74, "f177": 6.182, "f178": 6.182, "f179": 10.1, "f180": 59.41, "f181": 1.687, "f182": 1.687, "f183": 10.43, "f184": 56.19, "f185": 1.53, "f186": 1.53, "f187": 11.94, "f188": 48.17, "f189": 1.562, "f190": 1.562, "f266": 7.7, "f267": 10.4, "f268": 30, "f269": 20, "f270": 1.569, "f271": 10, "f272": 50, "f274": 45.91, "f275": 1.448, "f276": 68.19, "f277": 3.246, "f278": 0, "f279": 0.5405, "f283": 0.3196, "f284": 0.8801, "f285": 0.4192, "f286": 0.3714, "f288": 1.687, "f289": 1.082, "f290": 4.786, "f291": 1.33, "f292": 2.761}, {"name": "Ling 3.1 Flash", "creator": "InclusionAI", "open_weights": true, "f6": 0.6174, "f17": 1398, "f20": 0.015, "f35": 631100, "f37": 0.18, "f81": 0.1, "f82": 1627, "f89": 0.3943, "f116": 0.83, "f148": 61.85, "f149": 120.9, "f150": 48.32, "f151": 49.77, "f152": 1.45, "f153": 0.1222, "f155": 2, "f171": 108.5, "f172": 1.26, "f173": 146.2, "f174": 2.821, "f271": 0.075, "f272": 0.225, "f274": 112.8, "f275": 1.314, "f276": 135.3, "f277": 1.731, "f279": 0.5405, "f285": 0.3333}, {"name": "Qwen3.7 Plus", "creator": "Alibaba", "open_weights": false, "f5": 0.2242, "f6": 0.1739, "f17": 915.3, "f20": 0.08, "f35": 1000000, "f37": 0.09143, "f43": 147, "f45": 0.4056, "f81": 0.122, "f82": 775.2, "f85": 0.9, "f89": 0.3563, "f90": 0.139, "f92": 0.7796, "f116": 0.73, "f148": 45.78, "f149": 57.44, "f150": 34.82, "f151": 37.08, "f152": 2.264, "f153": 0.08889, "f154": 0.8046, "f155": 1, "f171": 52.32, "f172": 1.949, "f173": 61.14, "f174": 2.86, "f271": 0.4, "f272": 1.6, "f274": 53.15, "f275": 2.097, "f276": 60.07, "f277": 2.651, "f279": 0.4606, "f282": 0.9298, "f283": 0.1753, "f284": 0.6105, "f285": 0.0101, "f287": 0.4697}, {"name": "NVIDIA Nemotron Nano 12B v2 VL (non-reasoning)", "creator": "NVIDIA", "open_weights": true, "f3": 0.2667, "f35": 128000, "f37": 0, "f85": 0.4394, "f89": 0.04263, "f92": 0.2585, "f116": 0.2067, "f147": 0.345, "f148": 3.472, "f149": 205.2, "f151": 1.035, "f152": 1.035, "f154": 0.4451, "f155": 1, "f171": 171.9, "f172": 0.9778, "f173": 215.4, "f174": 5.213, "f271": 0.2, "f272": 0.6, "f274": 198.8, "f275": 1.004, "f276": 210.4, "f277": 1.169, "f282": 0.193, "f287": 0}, {"name": "Llama 4 Scout", "creator": "Meta", "open_weights": true, "f3": 0.14, "f6": 0.001911, "f17": 0, "f35": 131072, "f37": 0, "f43": 129.6, "f46": 8.92, "f47": 6.54, "f48": 5.81, "f49": 12.81, "f50": 5.88, "f51": 7.88, "f52": 6.18, "f53": 6.4, "f54": 5.65, "f55": 4.62, "f56": 7.31, "f57": 6.04, "f58": 9.08, "f59": 8.27, "f60": 5.42, "f61": 10.35, "f62": 9.65, "f81": 0, "f82": -155.4, "f85": 0.5869, "f89": 0.0378, "f92": 0.3952, "f116": 0.277, "f147": 0.2995, "f148": 15.67, "f149": 76.26, "f151": 1.283, "f152": 1.283, "f154": 0.5295, "f155": 5, "f171": 62.24, "f172": 0.6612, "f173": 92.06, "f174": 76.37, "f271": 0.1, "f272": 0.3, "f274": 72.15, "f275": 0.7929, "f276": 82.82, "f277": 8.755, "f279": 0.213, "f282": 0.155, "f283": 0.03299, "f284": 0.03745, "f285": 0, "f287": 0.01515}, {"name": "Granite 4.2 8B", "creator": "IBM", "open_weights": true, "f6": 0.02057, "f17": 310.4, "f20": 0.015, "f35": 131100, "f37": 0.002857, "f38": 0, "f81": 0.006, "f82": 499.1, "f85": 0.6313, "f89": 0.09685, "f90": 0.041, "f116": 0.45, "f148": 45.88, "f149": 55.62, "f150": 35.99, "f151": 36.88, "f152": 0.8897, "f155": 2, "f171": 30.22, "f172": 0.7058, "f173": 107.8, "f174": 2.091, "f271": 0.06, "f272": 0.25, "f274": 42.82, "f275": 0.8223, "f276": 76.67, "f277": 1.047, "f279": 0.3148, "f283": 0.07629, "f284": 0.1835, "f285": 0}, {"name": "Claude Haiku 5.5 (medium)", "creator": "Anthropic", "open_weights": false, "f6": 0.2859, "f7": 1590, "f8": 1573, "f9": 1607, "f10": 1369, "f11": 1359, "f12": 1378, "f13": 1222, "f14": 1207, "f15": 1236, "f16": 0.4495, "f17": 1369, "f18": 12.1, "f19": 0.9, "f20": 0.01, "f21": 0.125, "f22": 20505324, "f23": 3132095560, "f24": 52730406, "f25": 32225082, "f26": 35.55, "f27": 31.79, "f28": 34.88, "f29": 30.7, "f30": 32.6, "f31": 32.97, "f35": 1000000, "f36": 0.09176, "f37": 0.1286, "f38": 0.3, "f44": 30, "f78": 0.4043, "f79": 0.1609, "f81": 0.152, "f82": 1283, "f83": 1263, "f84": 1303, "f86": 0.005556, "f89": 0.3378, "f90": 0.168, "f91": 1, "f94": 24.55, "f95": 10.25, "f96": 29.97, "f97": 14.48, "f98": 46.33, "f99": 1.879, "f100": 26.37, "f101": 0.01062, "f102": 0.04734, "f103": 0.01687, "f104": 0.0651, "f105": 0.0008883, "f106": 0.02667, "f107": 0.01605, "f108": 0.09176, "f109": 16.11, "f110": 72.7, "f111": 21240, "f112": 53340, "f113": 32090, "f114": 198.2, "f116": 0.7733, "f148": 10.82, "f149": 174.6, "f151": 7.961, "f152": 7.961, "f153": 0.1611, "f155": 1, "f156": 4.167, "f157": 0.3173, "f158": 0.4038, "f159": 0.5962, "f165": 174.6, "f166": 122, "f167": 238.9, "f168": 144.3, "f169": 196, "f171": 122, "f172": 4.819, "f173": 238.9, "f174": 29.66, "f175": 47.83, "f176": 228.4, "f177": 45.64, "f178": 45.64, "f179": 10.82, "f180": 174.6, "f181": 7.961, "f182": 7.961, "f183": 10.7, "f184": 167, "f185": 7.709, "f186": 7.709, "f187": 9.457, "f188": 126.7, "f189": 5.51, "f190": 5.51, "f266": 0.077, "f267": 0.104, "f268": 0.3, "f269": 0.2, "f270": 0.01569, "f271": 0.1, "f272": 0.5, "f274": 144.3, "f275": 6.721, "f276": 196, "f277": 12.12, "f278": 0, "f279": 0.4896, "f285": 0.1515, "f286": 0.07143, "f288": 7.961, "f289": 4.819, "f290": 29.66, "f291": 6.721, "f292": 12.12}, {"name": "Qwen3.8 27B (xhigh)", "creator": "Alibaba", "open_weights": true, "f6": 0.4824, "f7": 1559, "f8": 1546, "f9": 1572, "f10": 1393, "f11": 1385, "f12": 1401, "f13": 1287, "f14": 1275, "f15": 1302, "f16": 0.478, "f17": 1393, "f18": 295.3, "f19": 0.8, "f20": 0.1, "f22": 30957789, "f23": 9864565565, "f24": 127697260, "f25": 96739471, "f26": 35.19, "f27": 28.1, "f28": 35.53, "f29": 34.61, "f30": 33.23, "f31": 38.98, "f32": 949, "f33": 929, "f34": 969, "f35": 262144, "f36": 0, "f37": 0.05429, "f38": 0.04, "f43": 151.7, "f44": 50, "f45": 0.4423, "f78": 0.3423, "f79": 0.1491, "f81": 0.164, "f82": 1427, "f83": 1407, "f84": 1447, "f85": 0.9051, "f89": 0.3392, "f90": 0.153, "f91": 12, "f94": 20.11, "f95": 92.87, "f96": 731.3, "f97": 1269, "f98": 2007, "f99": 6.787, "f100": 383.1, "f101": 0.1123, "f102": 1.181, "f103": 2.016, "f104": 3.2, "f105": 0.00317, "f106": 0.3294, "f107": 0.2171, "f108": 3.53, "f109": 290.2, "f110": 2390, "f111": 37440, "f112": 109800, "f113": 72360, "f114": 2319, "f116": 0.82, "f148": 28.54, "f149": 91.22, "f150": 21.92, "f151": 23.06, "f152": 1.134, "f153": 0.2278, "f154": 0.763, "f155": 9, "f156": -6.367, "f157": 0.173, "f158": 0.2862, "f159": 0.7138, "f160": 6, "f161": 38.89, "f162": 1, "f163": 0, "f164": 0, "f165": 36.21, "f166": 31.83, "f167": 44.45, "f168": 35.52, "f169": 40.91, "f170": 27, "f171": 33.24, "f172": 1.081, "f173": 142.4, "f174": 1.594, "f175": 47.24, "f176": 83.04, "f177": 41.22, "f178": 17.13, "f179": 73.16, "f180": 36.21, "f181": 59.35, "f182": 4.114, "f183": 69.85, "f184": 36.43, "f185": 56.12, "f186": 1.22, "f187": 73.33, "f188": 34.7, "f189": 58.92, "f190": 1.276, "f191": 27, "f192": 39, "f193": 13, "f194": 16, "f195": 22, "f196": 39, "f197": 23, "f198": 36, "f199": 45, "f200": 68, "f201": 78, "f202": 88, "f203": 27, "f204": 36, "f205": 21, "f206": 27, "f207": 30.7, "f208": 13.38, "f209": 33.18, "f210": 30.7, "f211": 55.45, "f212": 85.15, "f213": 30.7, "f214": 23.28, "f215": 5.196, "f216": 14.57, "f217": 17.5, "f218": 6774, "f219": 22.59, "f220": 12.01, "f221": 0.2233, "f222": 2.493, "f223": 0, "f224": 0.01222, "f225": 0.02778, "f226": 12.65, "f227": 0.92, "f228": 10.86, "f229": 37.9, "f230": 0.5044, "f231": 9.448, "f232": 25.07, "f233": 79.35, "f234": 0.1678, "f235": 1030, "f236": 760.6, "f237": 961.8, "f238": 1025, "f239": 1083, "f240": 829.1, "f241": 636.2, "f242": 815.2, "f243": 983.9, "f244": 815.2, "f245": 711.5, "f246": 936.3, "f247": 909.1, "f248": 797, "f249": 1033, "f250": 513.5, "f251": 606.4, "f252": 1184, "f253": 660.3, "f254": 719.2, "f255": 1010, "f256": 645, "f257": 1412, "f258": 1472, "f259": 1213, "f260": 475.2, "f261": 1806, "f262": 582.9, "f263": 1097, "f264": 1108, "f265": 188.1, "f266": 0.47, "f267": 0.5248, "f268": 1.75, "f269": 1.125, "f270": 0.1324, "f271": 0, "f272": 0, "f274": 43.23, "f275": 1.104, "f276": 110.1, "f277": 1.397, "f278": 2000, "f279": 0.4664, "f280": 60.2, "f283": 0.4804, "f284": 0.7978, "f285": 0.05556, "f286": 0.004762, "f288": 4.114, "f289": 3.741, "f290": 6.167, "f291": 3.893, "f292": 4.603}, {"name": "GPT-6.1 Terra (max)", "creator": "OpenAI", "open_weights": false, "f6": 0.6017, "f7": 1492, "f8": 1471, "f9": 1514, "f10": 1402, "f11": 1391, "f12": 1413, "f13": 1463, "f14": 1446, "f15": 1483, "f16": 0.4242, "f17": 1402, "f18": 73.51, "f19": 0.95, "f20": 0.05, "f21": 1.25, "f22": 18062949, "f23": 5567807688, "f24": 99386052, "f25": 81323103, "f26": 49.32, "f27": 54.39, "f28": 48.99, "f29": 44.72, "f30": 46.38, "f31": 50.02, "f35": 1000000, "f36": 0.9611, "f37": 0.28, "f38": 0.645, "f43": 168.1, "f44": 60, "f78": 0.3603, "f79": 0.4232, "f80": 92.68, "f81": 0.286, "f82": 1476, "f83": 1453, "f84": 1499, "f89": 0.4625, "f90": 0.473, "f91": 6, "f94": 50.98, "f95": 90.31, "f96": 270, "f97": 188.3, "f98": 475.4, "f99": 17.15, "f100": 496.9, "f101": 0.1026, "f102": 0.4264, "f103": 0.2271, "f104": 0.6617, "f105": 0.00815, "f106": 0.2994, "f107": 0.1968, "f108": 0.9611, "f109": 406.6, "f110": 972.3, "f111": 20520, "f112": 59880, "f113": 39360, "f114": 655.2, "f116": 0.8267, "f148": 216.8, "f149": 90.92, "f151": 211.3, "f152": 211.3, "f153": 0.3056, "f154": 0.8468, "f155": 1, "f156": 29.57, "f157": 0.4763, "f158": 0.345, "f159": 0.655, "f165": 90.92, "f166": 80.29, "f167": 143.7, "f168": 90.69, "f169": 104.8, "f171": 80.29, "f172": 57.67, "f173": 143.7, "f174": 351.2, "f175": 224, "f176": 90.92, "f177": 218.5, "f178": 218.5, "f179": 216.8, "f180": 90.92, "f181": 211.3, "f182": 211.3, "f183": 171.1, "f184": 90.97, "f185": 165.6, "f186": 165.6, "f187": 202.9, "f188": 90.98, "f189": 197.4, "f190": 197.4, "f266": 0.735, "f267": 1.04, "f268": 3, "f269": 2, "f270": 0.1078, "f271": 1, "f272": 5, "f274": 90.69, "f275": 77.04, "f276": 104.8, "f277": 289.8, "f278": 0, "f279": 0.5509, "f285": 0.5556, "f286": 0.5762, "f288": 211.3, "f289": 57.67, "f290": 351.2, "f291": 77.04, "f292": 289.8}, {"name": "Qwen3.8 Max (0902)", "creator": "Alibaba", "open_weights": false, "f0": 944.8, "f1": 914, "f2": 976, "f4": 0.45, "f5": 0.424, "f6": 0.5619, "f7": 1944, "f8": 1927, "f9": 1962, "f10": 1608, "f11": 1599, "f12": 1617, "f13": 1381, "f14": 1363, "f15": 1398, "f16": 0.5796, "f17": 1608, "f18": 1781, "f19": 0.875, "f20": 0.25, "f22": 38791483, "f23": 14549957467, "f24": 150456551, "f25": 111665068, "f26": 44.24, "f27": 39.18, "f28": 45.02, "f29": 40.84, "f30": 41.01, "f31": 47.26, "f32": 1021, "f33": 1001, "f34": 1040, "f35": 983616, "f36": 10.02, "f37": 0.1771, "f38": 0.285, "f40": 3.729, "f41": 57.46, "f42": 83.19, "f43": 157.4, "f44": 50, "f45": 0.4763, "f78": 0.4316, "f79": 0.2342, "f80": 46.34, "f81": 0.228, "f82": 1673, "f83": 1654, "f84": 1693, "f85": 0.9283, "f89": 0.431, "f90": 0.24, "f91": 2, "f94": 33.55, "f95": 232.7, "f96": 3378, "f97": 2044, "f98": 5451, "f99": 28.42, "f100": 902.7, "f101": 0.3066, "f102": 5.669, "f103": 3.317, "f104": 8.999, "f105": 0.01342, "f106": 1.025, "f107": 0.7182, "f108": 10.02, "f109": 670, "f110": 6354, "f111": 51100, "f112": 170800, "f113": 119700, "f114": 3297, "f115": 0.4025, "f116": 0.8033, "f148": 65.11, "f149": 40.26, "f150": 49.68, "f151": 52.69, "f152": 3.007, "f153": 0.2, "f154": 0.8277, "f155": 1, "f156": 10.47, "f157": 0.2953, "f158": 0.2706, "f159": 0.7294, "f165": 40.26, "f166": 34.62, "f167": 45.86, "f168": 38.21, "f169": 42.54, "f171": 34.62, "f172": 2.509, "f173": 45.86, "f174": 3.646, "f175": 66.23, "f176": 43.07, "f177": 54.62, "f178": 8.179, "f179": 65.11, "f180": 40.26, "f181": 52.69, "f182": 3.007, "f183": 67.06, "f184": 38.39, "f185": 54.04, "f186": 1.941, "f187": 69.54, "f188": 37.13, "f189": 56.07, "f190": 2.211, "f191": 22, "f192": 35, "f193": 13, "f194": 18, "f195": 45, "f196": 53, "f197": 29, "f198": 37, "f199": 51, "f200": 70, "f201": 71, "f202": 82, "f203": 37, "f204": 52, "f205": 28, "f206": 41, "f207": 28.23, "f208": 15.85, "f209": 48.02, "f210": 33.18, "f211": 62.88, "f212": 75.25, "f213": 45.55, "f214": 33.18, "f215": 4.603, "f216": 14.21, "f217": 12.39, "f218": 5822, "f219": 18.73, "f220": 10.21, "f221": 0.2533, "f222": 2.33, "f223": 0.01222, "f224": 0.005556, "f225": 0.03778, "f226": 11.88, "f227": 0.8478, "f228": 8.347, "f229": 33.97, "f230": 0.3011, "f231": 6.892, "f232": 18.99, "f233": 66.79, "f234": 0.1811, "f235": 863.2, "f236": 832.1, "f237": 963.6, "f238": 1009, "f239": 1064, "f240": 967.5, "f241": 637.3, "f242": 785.1, "f243": 902.2, "f244": 829.6, "f245": 839.9, "f246": 930.3, "f247": 970.5, "f248": 938.4, "f249": 953.9, "f250": 527.2, "f251": 752.2, "f252": 1137, "f253": 684.9, "f254": 771.5, "f255": 974.5, "f256": 633.7, "f257": 1418, "f258": 1458, "f259": 1243, "f260": 531.6, "f261": 1758, "f262": 648, "f263": 1062, "f264": 1129, "f265": 635.8, "f266": 1.175, "f267": 2.04, "f268": 4, "f269": 3, "f270": 0.3235, "f271": 2, "f272": 6, "f274": 38.21, "f275": 2.714, "f276": 42.54, "f277": 3.19, "f278": 2000, "f279": 0.5208, "f283": 0.4784, "f284": 0.8876, "f285": 0.3889, "f286": 0.119, "f288": 3.007, "f289": 2.509, "f290": 3.646, "f291": 2.714, "f292": 3.19}, {"name": "Claude Sonnet 5.5 (max with fallback)", "creator": "Anthropic", "open_weights": false, "f0": 1199, "f1": 1166, "f2": 1231, "f4": 0.575, "f6": 0.7177, "f7": 2104, "f8": 2084, "f9": 2127, "f10": 1812, "f11": 1801, "f12": 1824, "f13": 1712, "f14": 1692, "f15": 1735, "f16": 0.6515, "f17": 1812, "f18": 1863, "f19": 0.95, "f20": 0.1, "f21": 2.5, "f22": 61185196, "f23": 30617883701, "f24": 335221511, "f25": 274036315, "f26": 56.04, "f27": 58.2, "f28": 55.76, "f29": 54.22, "f30": 52.17, "f31": 58.06, "f32": 1443, "f33": 1419, "f34": 1468, "f35": 1000000, "f36": 10.02, "f37": 0.3143, "f38": 0.56, "f39": 55.5, "f43": 166, "f44": 60, "f78": 0.4583, "f79": 0.417, "f80": 80.49, "f81": 0.258, "f82": 1838, "f83": 1814, "f84": 1861, "f86": 0.02778, "f87": 0.6207, "f88": 0.6297, "f89": 0.5496, "f90": 0.533, "f91": 9, "f94": 54.24, "f95": 611.9, "f96": 2996, "f97": 1595, "f98": 4628, "f99": 37.56, "f100": 3352, "f101": 0.7903, "f102": 4.879, "f103": 2.27, "f104": 7.167, "f105": 0.0178, "f106": 2.854, "f107": 2.064, "f108": 10.02, "f109": 2740, "f110": 7981, "f111": 79030, "f112": 285400, "f113": 206400, "f114": 1305, "f116": 0.8267, "f148": 410.2, "f149": 135.6, "f151": 406.5, "f152": 406.5, "f153": 0.4167, "f155": 4, "f156": 30.47, "f157": 0.5147, "f158": 0.4327, "f159": 0.5673, "f165": 138.2, "f166": 119, "f167": 156.2, "f168": 128.5, "f169": 144.4, "f171": 118.4, "f172": 180.1, "f173": 156.7, "f174": 698, "f175": 341.3, "f176": 135.4, "f177": 337.6, "f178": 337.6, "f179": 405.6, "f180": 138.2, "f181": 402, "f182": 402, "f183": 255.6, "f184": 134.4, "f185": 251.9, "f186": 251.9, "f187": 254.2, "f188": 129.7, "f189": 250.4, "f190": 250.4, "f191": 46, "f192": 61, "f193": 68, "f194": 73, "f195": 78, "f196": 92, "f197": 76, "f198": 90, "f199": 68, "f200": 95, "f201": 14, "f202": 21, "f203": 96, "f204": 100, "f205": 61, "f206": 75, "f207": 52.98, "f208": 70.3, "f209": 82.67, "f210": 85.15, "f211": 80.2, "f212": 15.85, "f213": 100, "f214": 70.3, "f215": 2.988, "f216": 13.69, "f217": 9.951, "f218": 2861, "f219": 5.42, "f220": 9.522, "f221": 0.06667, "f222": 0.01222, "f223": 0.007778, "f224": 0.1356, "f225": 0.06889, "f226": 2.482, "f227": 1.433, "f228": 2.84, "f229": 7.287, "f230": 3.742, "f231": 1.934, "f232": 7.278, "f233": 34.22, "f234": 0.09556, "f235": 450.4, "f236": 1076, "f237": 941.3, "f238": 1012, "f239": 1177, "f240": 1200, "f241": 819.4, "f242": 936.7, "f243": 1081, "f244": 933.8, "f245": 1471, "f246": 1121, "f247": 1039, "f248": 1091, "f249": 1709, "f250": 1392, "f251": 991, "f252": 1348, "f253": 912.8, "f254": 1075, "f255": 1050, "f256": 1031, "f257": 1184, "f258": 1565, "f259": 1312, "f260": 1062, "f261": 1057, "f262": 989.9, "f263": 921.8, "f264": 907.4, "f265": 1065, "f266": 1.47, "f267": 2.079, "f268": 6, "f269": 4, "f270": 0.2157, "f271": 2, "f272": 10, "f274": 125.1, "f275": 287.8, "f276": 144.1, "f277": 538.1, "f278": 0, "f279": 0.61, "f280": 75.9, "f281": 166.4, "f285": 0.6364, "f286": 0.5333, "f288": 402, "f289": 219.8, "f290": 719.1, "f291": 279.9, "f292": 582}, {"name": "Hy3 (FP8)", "creator": "Tencent", "open_weights": true, "f6": 0.1841, "f17": 947.2, "f20": 0.033, "f35": 262100, "f37": 0.04857, "f81": 0.112, "f82": 1071, "f85": 0.897, "f89": 0.3346, "f90": 0.116, "f116": 0.79, "f148": 32.71, "f149": 83.6, "f150": 23.94, "f151": 26.72, "f152": 2.785, "f155": 4, "f171": 55.58, "f172": 2.262, "f173": 103.6, "f174": 3.874, "f271": 0.13, "f272": 0.53, "f274": 73.29, "f275": 2.565, "f276": 92.9, "f277": 3.223, "f279": 0.4861, "f283": 0.2289, "f284": 0.6442, "f285": 0.005051}, {"name": "GPT-6.1 Sol (max)", "creator": "OpenAI", "open_weights": false, "f0": 1119, "f1": 1088, "f2": 1151, "f4": 0.5, "f6": 0.6487, "f7": 1767, "f8": 1751, "f9": 1782, "f10": 1555, "f11": 1546, "f12": 1565, "f13": 1453, "f14": 1434, "f15": 1471, "f16": 0.5566, "f17": 1555, "f18": 210.4, "f19": 0.95, "f20": 0.05, "f21": 1.25, "f22": 17049447, "f23": 1916169604, "f24": 63661006, "f25": 46611559, "f26": 57.42, "f27": 59.25, "f28": 56.23, "f29": 52.03, "f30": 53.66, "f31": 57.61, "f32": 1369, "f33": 1346, "f34": 1393, "f35": 1000000, "f36": 0.636, "f37": 0.3171, "f38": 0.685, "f43": 168.2, "f44": 60, "f63": 6.88, "f64": 8.09, "f65": 7.07, "f66": 7.96, "f67": 5.33, "f68": 6.88, "f69": 1272, "f70": 8.79, "f71": 6.68, "f72": 7.73, "f73": 5.31, "f74": 8.68, "f75": 6.72, "f76": 6.28, "f77": 4.63, "f78": 0.4912, "f79": 0.4063, "f80": 100, "f81": 0.31, "f82": 1608, "f83": 1585, "f84": 1630, "f86": 0.06944, "f87": 0.5852, "f88": 0.6509, "f89": 0.5292, "f90": 0.588, "f91": 10, "f94": 54.51, "f95": 170.5, "f96": 178.9, "f97": 274.1, "f98": 487.4, "f99": 34.3, "f100": 636.6, "f101": 0.1861, "f102": 0.2518, "f103": 0.3258, "f104": 0.5938, "f105": 0.0163, "f106": 0.6782, "f107": 0.4921, "f108": 1.272, "f109": 466.1, "f110": 1124, "f111": 18610, "f112": 67820, "f113": 49210, "f114": 890.6, "f116": 0.83, "f148": 188.2, "f149": 95.23, "f151": 183, "f152": 183, "f153": 0.3833, "f154": 0.8595, "f155": 2, "f156": 42.03, "f157": 0.6183, "f158": 0.5188, "f159": 0.4812, "f165": 78.84, "f166": 42.3, "f167": 102.4, "f168": 51.53, "f169": 86.36, "f171": 48.64, "f172": 53.27, "f173": 153.9, "f174": 365, "f175": 368.1, "f176": 51.92, "f177": 358.5, "f178": 358.5, "f179": 253.9, "f180": 78.84, "f181": 247.5, "f182": 247.5, "f183": 187.4, "f184": 83.54, "f185": 181.4, "f186": 181.4, "f187": 174.1, "f188": 50.51, "f189": 164.2, "f190": 164.2, "f191": 51, "f192": 51, "f193": 46, "f194": 46, "f195": 55, "f196": 55, "f197": 18, "f198": 18, "f199": 78, "f200": 78, "f201": 11, "f202": 11, "f203": 93, "f204": 93, "f205": 63, "f206": 63, "f207": 50.5, "f208": 45.55, "f209": 55.45, "f210": 18.32, "f211": 77.73, "f212": 10.9, "f213": 92.58, "f214": 62.88, "f215": 1.232, "f216": 12.64, "f217": 8.601, "f218": 2308, "f219": 5.09, "f220": 6.114, "f221": 0.04, "f222": 3.012, "f223": 0.006667, "f224": 0.2867, "f225": 0.02889, "f226": 1.851, "f227": 0.5344, "f228": 1.434, "f229": 9.482, "f230": 0.2533, "f231": 2.258, "f232": 5.568, "f233": 27.18, "f234": 0.1456, "f235": 337, "f236": 1000, "f237": 1000, "f238": 1000, "f239": 1000, "f240": 1000, "f241": 1000, "f242": 1000, "f243": 1000, "f244": 1000, "f245": 1000, "f246": 1000, "f247": 1000, "f248": 1000, "f249": 1000, "f250": 1000, "f251": 1000, "f252": 1000, "f253": 1000, "f254": 1000, "f255": 1000, "f256": 1000, "f257": 1000, "f258": 1000, "f259": 1000, "f260": 1000, "f261": 1000, "f262": 1000, "f263": 1000, "f264": 1000, "f265": 1000, "f266": 1.47, "f267": 2.079, "f268": 6, "f269": 4, "f270": 0.2157, "f271": 1, "f272": 5, "f274": 67.7, "f275": 77.8, "f276": 119.8, "f277": 232.9, "f278": 0, "f279": 0.5417, "f280": 82.9, "f281": 168.3, "f285": 0.5606, "f286": 0.581, "f288": 247.5, "f289": 76.28, "f290": 462, "f291": 127.8, "f292": 324.2}, {"name": "Qwen3 Omni 30B A3B", "creator": "Alibaba", "open_weights": true, "f3": 0.74, "f35": 65536, "f37": 0, "f85": 0.7263, "f89": 0.07461, "f92": 0.434, "f116": 0, "f147": 0.6794, "f148": 26.32, "f149": 102.4, "f150": 19.53, "f151": 21.43, "f152": 1.903, "f154": 0.6023, "f155": 1, "f171": 97.32, "f172": 1.746, "f173": 105.3, "f174": 2.384, "f271": 0.25, "f272": 0.97, "f274": 101, "f275": 1.837, "f276": 103.3, "f277": 1.978, "f282": 0.2135, "f287": 0.03788}, {"name": "K2 Horizon 375B A23B", "creator": "Institute of Foundation Models", "open_weights": true, "f6": 0.3721, "f7": 1376, "f8": 1360, "f9": 1390, "f10": 1293, "f11": 1286, "f12": 1301, "f13": 1256, "f14": 1244, "f15": 1268, "f16": 0.4165, "f17": 1293, "f18": 0, "f22": 18006313, "f23": 4743322159, "f24": 94266731, "f25": 76260418, "f26": 31.76, "f27": 26.55, "f28": 32.22, "f29": 29.47, "f30": 28.88, "f31": 32.92, "f35": 524288, "f36": 0, "f37": 0.04571, "f38": 0.115, "f44": 40, "f78": 0.321, "f79": 0.1185, "f81": 0.074, "f82": 1366, "f83": 1346, "f84": 1385, "f85": 0.8727, "f89": 0.3197, "f90": 0.102, "f91": 1, "f93": 23, "f94": 17.77, "f95": 0, "f96": 0, "f97": 0, "f98": 0, "f99": 0, "f100": 0, "f101": 0, "f102": 0, "f103": 0, "f104": 0, "f105": 0, "f106": 0, "f107": 0, "f108": 0, "f109": 0, "f110": 0, "f111": 18220, "f112": 63670, "f113": 45440, "f114": 80.98, "f116": 0.8, "f148": 5.557, "f149": 772.1, "f150": 2.59, "f151": 4.909, "f152": 2.319, "f153": 0.1222, "f155": 1, "f156": -5, "f157": 0.1863, "f158": 0.2905, "f159": 0.7095, "f165": 772.1, "f166": 103.7, "f167": 1346, "f168": 120.1, "f169": 1055, "f170": 375, "f171": 103.7, "f172": 2.054, "f173": 1346, "f174": 87.87, "f175": 8.39, "f176": 871.3, "f177": 7.816, "f178": 5.52, "f179": 5.557, "f180": 772.1, "f181": 4.909, "f182": 2.319, "f183": 4.085, "f184": 929, "f185": 3.547, "f186": 1.394, "f187": 4.2, "f188": 807.2, "f189": 3.581, "f190": 1.103, "f191": 9, "f192": 14, "f193": 17, "f194": 29, "f195": 39, "f196": 48, "f197": 63, "f198": 72, "f199": 24, "f200": 54, "f201": 93, "f202": 97, "f203": 8, "f204": 14, "f205": 11, "f206": 14, "f207": 10.9, "f208": 20.8, "f209": 45.55, "f210": 70.3, "f211": 43.07, "f212": 95.05, "f213": 13.38, "f214": 13.38, "f215": 10.82, "f216": 14.67, "f217": 38.93, "f218": 6583, "f219": 16.36, "f220": 15.18, "f221": 0.4211, "f222": 4.338, "f223": 2.613, "f224": 0.02222, "f225": 0.7789, "f226": 7.13, "f227": 10.17, "f228": 4.402, "f229": 10.68, "f230": 23.16, "f231": 5.151, "f232": 32.73, "f233": 68.61, "f234": 1.998, "f235": 922, "f236": 378.4, "f237": 759.1, "f238": 977.5, "f239": 822.7, "f240": 1106, "f241": 304.6, "f242": 578, "f243": 1027, "f244": 574.6, "f245": 1053, "f246": 917.9, "f247": 962.3, "f248": 707.1, "f249": 1387, "f250": 906, "f251": 533.2, "f252": 1575, "f253": 452.9, "f254": 636.3, "f255": 1040, "f256": 638.5, "f257": 1488, "f258": 1845, "f259": 1283, "f260": -77.04, "f261": 2061, "f262": 685.3, "f263": 1057, "f264": 1322, "f265": -40.82, "f266": 0, "f267": 0, "f268": 0, "f269": 0, "f270": 0, "f271": 0, "f272": 0, "f274": 120.1, "f275": 2.185, "f276": 1055, "f277": 25.1, "f278": 2000, "f279": 0.4294, "f283": 0.3423, "f284": 0.7191, "f285": 0.01515, "f286": 0, "f288": 2.319, "f289": 2.054, "f290": 87.87, "f291": 2.185, "f292": 25.1}, {"name": "Claude Sonnet 5.5 (low with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.4942, "f7": 1433, "f8": 1415, "f9": 1452, "f10": 1268, "f11": 1258, "f12": 1278, "f13": 1121, "f14": 1102, "f15": 1139, "f16": 0.4172, "f17": 1268, "f18": 73.03, "f19": 0.95, "f20": 0.1, "f21": 2.5, "f22": 15130803, "f23": 1087128505, "f24": 21348593, "f25": 6217790, "f26": 35.79, "f27": 33.02, "f28": 35.94, "f29": 37.29, "f30": 36.88, "f31": 41.68, "f35": 1000000, "f36": 1.033, "f37": 0.1143, "f38": 0.225, "f44": 20, "f78": 0.2642, "f79": 0.07126, "f81": 0.16, "f82": 1182, "f83": 1160, "f84": 1204, "f89": 0.3624, "f90": 0.206, "f91": 4, "f94": 25.3, "f95": 151.3, "f96": 100.9, "f97": 147, "f98": 285.7, "f99": 37.73, "f100": 213.5, "f101": 0.123, "f102": 0.1478, "f103": 0.1371, "f104": 0.3028, "f105": 0.01784, "f106": 0.2086, "f107": 0.08559, "f108": 0.5113, "f109": 62.18, "f110": 499.2, "f111": 12300, "f112": 20860, "f113": 8559, "f114": 131.4, "f116": 0.76, "f148": 5.993, "f149": 104.9, "f151": 1.272, "f152": 1.272, "f153": 0.1944, "f155": 4, "f156": 20.27, "f157": 0.46, "f158": 0.4765, "f159": 0.5235, "f165": 102.9, "f166": 82.61, "f167": 135.1, "f168": 91.32, "f169": 122.9, "f171": 84.61, "f172": 0.803, "f173": 140.3, "f174": 7.659, "f175": 21.04, "f176": 146.8, "f177": 17.64, "f178": 17.64, "f179": 6.12, "f180": 102.9, "f181": 1.262, "f182": 1.262, "f183": 5.934, "f184": 98.66, "f185": 0.8661, "f186": 0.8661, "f187": 7.008, "f188": 82.03, "f189": 0.9123, "f190": 0.9123, "f266": 1.47, "f267": 2.079, "f268": 6, "f269": 4, "f270": 0.2157, "f271": 2, "f272": 10, "f274": 90.99, "f275": 0.9606, "f276": 120.3, "f277": 1.736, "f278": 0, "f279": 0.4907, "f285": 0.2071, "f286": 0.1048, "f288": 1.262, "f289": 0.8026, "f290": 8.008, "f291": 0.9977, "f292": 2.328}, {"name": "Gemini 3.1 Pro Preview (Vertex)", "creator": "Google", "open_weights": false, "f4": 0.4125, "f5": 0.3201, "f6": 0.3543, "f17": 457, "f20": 0.2, "f35": 1000000, "f37": 0.1771, "f40": 2.143, "f41": 11.73, "f42": 28.32, "f43": 155.3, "f45": 0.4217, "f46": 17.38, "f47": 13.42, "f48": 12.31, "f49": 11.42, "f50": 11.15, "f51": 15.19, "f52": 16.6, "f53": 15.6, "f54": 14.04, "f55": 13.38, "f56": 9.62, "f57": 14.23, "f58": 11.54, "f59": 12.92, "f60": 13.35, "f61": 14, "f62": 13.92, "f63": 5.68, "f64": 4.62, "f65": 3.61, "f66": 5.71, "f67": 2.65, "f68": 5.9, "f69": 1132, "f70": 5.22, "f71": 3.78, "f72": 5.38, "f73": 4.28, "f74": 4.67, "f75": 5.78, "f76": 8.58, "f77": 7.91, "f80": 26.83, "f81": 0.178, "f82": 799.3, "f85": 0.9414, "f86": 0, "f89": 0.4703, "f90": 0.314, "f92": 0.7714, "f115": 0.3033, "f116": 0.82, "f117": 98, "f118": 45.4, "f119": 78.26, "f120": 74.65, "f121": 76.45, "f122": 100, "f123": 85.24, "f124": 78.54, "f125": 79.1, "f126": 78, "f127": 54.55, "f128": 85.38, "f129": 72, "f130": 96.08, "f131": 91.05, "f132": 92.1, "f133": 79.87, "f134": 74.13, "f135": 55, "f136": 84, "f137": 71.05, "f138": 98, "f139": 77.25, "f140": 88.23, "f141": 52.35, "f142": 98.04, "f143": 80.77, "f144": 26.67, "f145": 82, "f146": 85.25, "f148": 25.37, "f149": 118.1, "f151": 21.02, "f152": 21.02, "f153": 0.1111, "f154": 0.8243, "f155": 1, "f171": 79.97, "f172": 14.17, "f173": 135.7, "f174": 60.42, "f271": 2, "f272": 12, "f274": 92.24, "f275": 18.27, "f276": 130.4, "f277": 30.58, "f279": 0.5868, "f280": 79.6, "f281": 154.7, "f282": 0.9561, "f283": 0.2144, "f284": 0.7378, "f285": 0.0404, "f287": 0.5379}, {"name": "GPT-6 Luna (low)", "creator": "OpenAI", "open_weights": false, "f6": 0.1205, "f7": 653.7, "f8": 633.6, "f9": 672, "f10": 740.3, "f11": 730.9, "f12": 749.5, "f13": 774.2, "f14": 757.6, "f15": 789.9, "f16": 0.1444, "f17": 740.3, "f18": 0.5538, "f19": 0.9, "f20": 0.01, "f21": 0.125, "f22": 3396836, "f23": 228133068, "f24": 5823065, "f25": 2426229, "f26": 18.72, "f27": 18.73, "f28": 17.18, "f29": 16.17, "f30": 16.35, "f31": 16.8, "f35": 1000000, "f36": 0.005115, "f37": 0.02571, "f38": 0.095, "f44": 20, "f78": 0.1406, "f79": 0.02195, "f81": 0.09, "f82": 1041, "f83": 1019, "f84": 1063, "f89": 0.2025, "f90": 0.102, "f91": 1, "f94": 9.666, "f95": 1.698, "f96": 1.905, "f97": 2.555, "f98": 6.176, "f99": 1.715, "f100": 2.912, "f101": 0.001297, "f102": 0.001141, "f103": 0.001511, "f104": 0.003467, "f105": 0.000815, "f106": 0.001648, "f107": 0.0003511, "f108": 0.005115, "f109": 1.213, "f110": 9.087, "f111": 2594, "f112": 3296, "f113": 702.2, "f114": 30.85, "f116": 0.74, "f148": 6.505, "f149": 107.7, "f151": 1.863, "f152": 1.863, "f153": 0.1889, "f154": 0.7595, "f155": 1, "f156": -18.1, "f157": 0.361, "f158": 0.8482, "f159": 0.1518, "f165": 107.7, "f166": 78.58, "f167": 160.7, "f168": 100.9, "f169": 131, "f171": 78.58, "f172": 0.8326, "f173": 160.7, "f174": 5.619, "f175": 9.364, "f176": 119.4, "f177": 5.178, "f178": 5.178, "f179": 6.505, "f180": 107.7, "f181": 1.863, "f182": 1.863, "f183": 7.239, "f184": 116, "f185": 2.927, "f186": 2.927, "f187": 7.426, "f188": 98.71, "f189": 2.36, "f190": 2.36, "f266": 0.077, "f267": 0.104, "f268": 0.3, "f269": 0.2, "f270": 0.01569, "f271": 0.1, "f272": 0.5, "f274": 100.9, "f275": 1.497, "f276": 131, "f277": 2.745, "f278": 0, "f279": 0.4688, "f285": 0, "f286": 0.009524, "f288": 1.863, "f289": 0.8326, "f290": 5.619, "f291": 1.497, "f292": 2.745}, {"name": "GPT-5.5 Instant (June 2026)", "creator": "OpenAI", "open_weights": false, "f6": 0.3644, "f17": 1086, "f20": 0.5, "f35": 400000, "f37": 0, "f43": 142.5, "f80": 2.439, "f81": 0.202, "f82": 516.7, "f85": 0.8232, "f89": 0.1993, "f90": 0.146, "f116": 0.7, "f148": 17.65, "f149": 149.4, "f150": 13.39, "f151": 14.31, "f152": 0.9224, "f153": 0.3167, "f155": 1, "f171": 124, "f172": 0.8224, "f173": 189.2, "f174": 4.458, "f271": 5, "f272": 30, "f274": 136.1, "f275": 0.8664, "f276": 171, "f277": 0.9839, "f279": 0.5255, "f283": 0.1175, "f284": 0.3483, "f285": 0.1263}, {"name": "GPT-6.1 Terra (medium)", "creator": "OpenAI", "open_weights": false, "f6": 0.578, "f7": 1222, "f8": 1203, "f9": 1241, "f10": 1191, "f11": 1181, "f12": 1201, "f13": 1250, "f14": 1232, "f15": 1269, "f16": 0.3364, "f17": 1191, "f18": 16.72, "f19": 0.95, "f20": 0.05, "f21": 1.25, "f22": 8356080, "f23": 879072127, "f24": 13627217, "f25": 5271137, "f26": 41.07, "f27": 42.56, "f28": 42.49, "f30": 40.5, "f31": 45.45, "f35": 1000000, "f36": 0.1688, "f37": 0.2143, "f38": 0.56, "f44": 30, "f78": 0.4372, "f79": 0.3454, "f81": 0.284, "f82": 1325, "f83": 1303, "f84": 1348, "f89": 0.4022, "f90": 0.313, "f91": 1, "f94": 38.12, "f95": 41.78, "f96": 40.51, "f97": 64.56, "f98": 122.2, "f99": 17.15, "f100": 68.14, "f101": 0.0341, "f102": 0.05149, "f103": 0.05479, "f104": 0.1144, "f105": 0.00815, "f106": 0.05438, "f107": 0.02027, "f108": 0.1688, "f109": 26.36, "f110": 190.4, "f111": 6821, "f112": 10880, "f113": 4055, "f114": 118.9, "f116": 0.8067, "f148": 7.648, "f149": 90.9, "f151": 2.147, "f152": 2.147, "f154": 0.8277, "f155": 1, "f156": 26.6, "f157": 0.4743, "f158": 0.3963, "f159": 0.6037, "f165": 90.9, "f166": 76.77, "f167": 96.68, "f168": 88.3, "f169": 91.49, "f171": 76.77, "f172": 1.227, "f173": 96.68, "f174": 6.874, "f175": 11.65, "f176": 90.91, "f177": 6.154, "f178": 6.154, "f179": 7.648, "f180": 90.9, "f181": 2.147, "f182": 2.147, "f183": 7.899, "f184": 91.05, "f185": 2.407, "f186": 2.407, "f187": 7.458, "f188": 90.99, "f189": 1.962, "f190": 1.962, "f266": 0.735, "f267": 1.04, "f268": 3, "f269": 2, "f270": 0.1078, "f271": 1, "f272": 5, "f274": 88.3, "f275": 1.839, "f276": 91.49, "f277": 3.06, "f278": 0, "f279": 0.5162, "f285": 0.3232, "f286": 0.2476, "f288": 2.147, "f289": 1.227, "f290": 6.874, "f291": 1.839, "f292": 3.06}, {"name": "GPT-6.1 Terra (low)", "creator": "OpenAI", "open_weights": false, "f6": 0.5625, "f7": 1007, "f8": 987.8, "f9": 1026, "f10": 1030, "f11": 1020, "f12": 1041, "f13": 1065, "f14": 1046, "f15": 1083, "f16": 0.2808, "f17": 1030, "f18": 7.72, "f19": 0.95, "f20": 0.05, "f21": 1.25, "f22": 5646362, "f23": 373959702, "f24": 7189028, "f25": 1542666, "f26": 36, "f27": 35.02, "f28": 37.94, "f30": 37.26, "f31": 42.18, "f35": 1000000, "f36": 0.07134, "f37": 0.1514, "f38": 0.485, "f44": 20, "f78": 0.3634, "f79": 0.2449, "f81": 0.256, "f82": 1204, "f83": 1181, "f84": 1227, "f89": 0.3582, "f90": 0.249, "f91": 1, "f94": 29.22, "f95": 28.23, "f96": 16.16, "f97": 41.9, "f98": 75.22, "f99": 17.15, "f100": 35.95, "f101": 0.01736, "f102": 0.01501, "f103": 0.02606, "f104": 0.04923, "f105": 0.00815, "f106": 0.02211, "f107": 0.004751, "f108": 0.07134, "f109": 7.713, "f110": 111.2, "f111": 3472, "f112": 4422, "f113": 950.1, "f114": 48.29, "f116": 0.81, "f148": 6.791, "f149": 90.93, "f151": 1.293, "f152": 1.293, "f154": 0.8249, "f155": 1, "f156": 22.93, "f157": 0.4557, "f158": 0.4158, "f159": 0.5842, "f165": 90.93, "f166": 80.22, "f167": 94.8, "f168": 90.81, "f169": 90.99, "f171": 80.22, "f172": 1.063, "f173": 94.8, "f174": 3, "f175": 7.383, "f176": 91, "f177": 1.888, "f178": 1.888, "f179": 6.791, "f180": 90.93, "f181": 1.293, "f182": 1.293, "f183": 7.013, "f184": 90.97, "f185": 1.517, "f186": 1.517, "f187": 6.526, "f188": 90.81, "f189": 1.02, "f190": 1.02, "f266": 0.735, "f267": 1.04, "f268": 3, "f269": 2, "f270": 0.1078, "f271": 1, "f272": 5, "f274": 90.81, "f275": 1.159, "f276": 90.99, "f277": 1.566, "f278": 0, "f279": 0.5243, "f285": 0.1515, "f286": 0.07619, "f288": 1.293, "f289": 1.063, "f290": 3, "f291": 1.159, "f292": 1.566}, {"name": "gpt-oss-120b (low) Base", "creator": "OpenAI", "open_weights": true, "f3": 0.6667, "f35": 131100, "f37": 0, "f46": 16.38, "f47": 10.27, "f48": 6.15, "f49": 13.04, "f50": 6.62, "f51": 10.88, "f52": 12.82, "f53": 11.62, "f54": 8.31, "f55": 7.54, "f56": 8.31, "f57": 10.15, "f58": 9.85, "f59": 12.31, "f60": 8.65, "f61": 12.65, "f62": 11.38, "f82": 179.8, "f85": 0.6717, "f89": 0.05885, "f92": 0.583, "f116": 0.46, "f147": 0.7069, "f148": 10.66, "f149": 254.3, "f150": 7.892, "f151": 8.692, "f152": 0.6949, "f155": 14, "f171": 145.6, "f172": 0.5677, "f173": 358.4, "f174": 1.172, "f271": 0.03, "f272": 0.17, "f274": 221.5, "f275": 0.6451, "f276": 290.1, "f277": 0.9958, "f282": 0.4503, "f283": 0.02887, "f284": 0.1386, "f287": 0.05303}, {"name": "GLM-5.3 (low)", "creator": "Z AI", "open_weights": true, "f6": 0.5198, "f7": 1310, "f8": 1293, "f9": 1327, "f10": 1184, "f11": 1175, "f12": 1194, "f13": 1063, "f14": 1046, "f15": 1081, "f16": 0.3773, "f17": 1184, "f18": 66.03, "f19": 0.8143, "f20": 0.05, "f22": 14632862, "f23": 3231996891, "f24": 63285718, "f25": 48652856, "f26": 29.93, "f27": 28.3, "f28": 31.19, "f29": 31, "f30": 27.65, "f31": 37.96, "f35": 1000000, "f36": 0.335, "f37": 0.1457, "f38": 0.21, "f44": 20, "f78": 0.3492, "f79": 0.1274, "f81": 0.088, "f82": 1334, "f83": 1314, "f84": 1354, "f89": 0.3656, "f90": 0.175, "f91": 9, "f93": 40, "f94": 23.06, "f95": 64.38, "f96": 817.6, "f97": 116.8, "f98": 940.1, "f99": 5.742, "f100": 278.5, "f101": 0.07183, "f102": 1.204, "f103": 0.1398, "f104": 1.346, "f105": 0.002482, "f106": 0.2287, "f107": 0.1569, "f108": 1.575, "f109": 214.1, "f110": 1219, "f111": 16320, "f112": 51990, "f113": 35660, "f114": 706.1, "f116": 0.7267, "f148": 19.97, "f149": 135, "f150": 14.81, "f151": 16.17, "f152": 1.434, "f153": 0.1111, "f155": 7, "f156": -11.17, "f157": 0.319, "f158": 0.6324, "f159": 0.3676, "f160": 5, "f161": 33.33, "f162": 1, "f163": 0, "f164": 0, "f165": 73.18, "f166": 32.86, "f167": 139.8, "f168": 64.57, "f169": 97.01, "f170": 753, "f171": 85.74, "f172": 1.174, "f173": 189.8, "f174": 3.652, "f175": 25.87, "f176": 120.4, "f177": 21.72, "f178": 5.114, "f179": 35.87, "f180": 73.18, "f181": 29.04, "f182": 1.707, "f183": 36.08, "f184": 72.45, "f185": 29.18, "f186": 1.575, "f187": 43.63, "f188": 60.03, "f189": 35.3, "f190": 1.99, "f266": 0.902, "f267": 1.43, "f268": 2.9, "f269": 2.15, "f270": 0.3118, "f271": 0.5, "f272": 1, "f274": 111.6, "f275": 1.363, "f276": 162, "f277": 1.637, "f278": 2000, "f279": 0.4201, "f285": 0.3485, "f286": 0.0381, "f288": 1.707, "f289": 1.276, "f290": 3.652, "f291": 1.46, "f292": 2.958}, {"name": "Gemma 4 31B", "creator": "Google", "open_weights": true, "f6": 0.04933, "f17": 368.6, "f35": 262144, "f37": 0.01429, "f38": 0.04, "f43": 143, "f45": 0.2835, "f46": 17.31, "f47": 14.31, "f48": 12.85, "f49": 10.62, "f50": 10.46, "f51": 14.73, "f52": 15.38, "f53": 14.62, "f54": 12.77, "f55": 13.65, "f56": 10.19, "f57": 15.08, "f58": 10.88, "f59": 12.62, "f60": 13.88, "f61": 12.38, "f62": 12, "f63": 6.53, "f64": 4.15, "f65": 3.66, "f66": 4.69, "f67": 3.27, "f68": 5.2, "f69": 1110, "f70": 4.05, "f71": 3.71, "f72": 5.11, "f73": 5.35, "f74": 3.95, "f75": 5.8, "f76": 7.43, "f77": 7.28, "f81": 0.06, "f82": 626.8, "f85": 0.8566, "f89": 0.2363, "f92": 0.7558, "f115": 0.3729, "f116": 0.6967, "f148": 44.09, "f149": 51.84, "f150": 33.49, "f151": 34.44, "f152": 1.727, "f154": 0.7341, "f155": 11, "f156": -48.53, "f157": 0.1993, "f159": 0.1449, "f171": 33.42, "f172": 1.159, "f173": 74.25, "f174": 3.042, "f271": 0, "f272": 0, "f274": 36.89, "f275": 1.489, "f276": 66.88, "f277": 2.215, "f279": 0.4549, "f281": 144.9, "f282": 0.5994, "f283": 0.1485, "f284": 0.4345, "f285": 0, "f287": 0.3636}, {"name": "GLM-5.3 (max)", "creator": "Z AI", "open_weights": true, "f0": 783, "f1": 749, "f2": 817, "f4": 0.3875, "f6": 0.622, "f7": 1760, "f8": 1744, "f9": 1777, "f10": 1504, "f11": 1496, "f12": 1513, "f13": 1353, "f14": 1338, "f15": 1368, "f16": 0.5135, "f17": 1504, "f18": 514, "f19": 0.8143, "f20": 0.018, "f22": 27420388, "f23": 10296409355, "f24": 135067089, "f25": 107646701, "f26": 39.32, "f27": 37.59, "f28": 42.13, "f29": 39.34, "f30": 35.81, "f31": 47.4, "f32": 1034, "f33": 1014, "f34": 1053, "f35": 1000000, "f36": 1.48, "f37": 0.1914, "f38": 0.335, "f40": 3.993, "f41": 68.96, "f42": 87.61, "f43": 156, "f44": 60, "f45": 0.3644, "f78": 0.4008, "f79": 0.2159, "f80": 29.27, "f81": 0.112, "f82": 1658, "f83": 1639, "f84": 1677, "f85": 0.9172, "f86": 0.002778, "f87": 0.5453, "f88": 0.528, "f89": 0.4226, "f90": 0.179, "f91": 28, "f93": 40, "f94": 31.65, "f95": 120.6, "f96": 2626, "f97": 269.7, "f98": 2901, "f99": 5.736, "f100": 594.3, "f101": 0.1505, "f102": 4.134, "f103": 0.3491, "f104": 4.486, "f105": 0.002481, "f106": 0.5235, "f107": 0.373, "f108": 5.009, "f109": 473.6, "f110": 3496, "f111": 34210, "f112": 119000, "f113": 84780, "f114": 1298, "f115": 0.4608, "f116": 0.7967, "f148": 16.09, "f149": 167, "f150": 11.98, "f151": 13.09, "f152": 1.045, "f153": 0.1722, "f155": 23, "f156": 6.033, "f157": 0.3233, "f158": 0.3887, "f159": 0.6113, "f160": 5, "f161": 33.33, "f162": 1, "f163": 0, "f164": 0, "f165": 71.99, "f166": 34.67, "f167": 117.1, "f168": 61.2, "f169": 100.4, "f170": 753, "f171": 83.82, "f172": 0.8275, "f173": 234.4, "f174": 3.838, "f175": 25.84, "f176": 121.6, "f177": 21.72, "f178": 5.27, "f179": 36.82, "f180": 71.99, "f181": 29.87, "f182": 2.089, "f183": 34.03, "f184": 77.17, "f185": 27.55, "f186": 1.638, "f187": 42.26, "f188": 61.92, "f189": 34.19, "f190": 1.886, "f191": 79, "f192": 93, "f193": 96, "f194": 99, "f195": 85, "f196": 96, "f197": 49, "f198": 61, "f199": 17, "f200": 39, "f201": 27, "f202": 36, "f203": 68, "f204": 82, "f205": 84, "f206": 95, "f207": 90.1, "f208": 97.52, "f209": 92.58, "f210": 55.45, "f211": 20.8, "f212": 30.7, "f213": 80.2, "f214": 90.1, "f215": 2.262, "f216": 16.59, "f217": 6.249, "f218": 2762, "f219": 6.122, "f220": 10.68, "f221": 0.06333, "f222": 7.418, "f223": 0.007778, "f224": 0.1, "f225": 0.06556, "f226": 1.09, "f227": 1.932, "f228": 1.374, "f229": 8.009, "f230": 3.608, "f231": 1.6, "f232": 7.224, "f233": 27.8, "f234": 0.01778, "f235": 425.3, "f236": 813, "f237": 869.8, "f238": 1124, "f239": 1448, "f240": 1507, "f241": 715.1, "f242": 854, "f243": 1686, "f244": 1185, "f245": 1334, "f246": 1079, "f247": 1109, "f248": 1280, "f249": 1427, "f250": 1784, "f251": 932.7, "f252": 1523, "f253": 1488, "f254": 934.6, "f255": 1243, "f256": 1190, "f257": 830.7, "f258": 1343, "f259": 993.8, "f260": 1400, "f261": 1214, "f262": 820.4, "f263": 893.6, "f264": 908.8, "f265": 743.3, "f266": 0.902, "f267": 1.43, "f268": 2.9, "f269": 2.15, "f270": 0.3118, "f271": 0.2, "f272": 0.64, "f274": 128.1, "f275": 0.9041, "f276": 193.8, "f277": 1.293, "f278": 2000, "f279": 0.5903, "f280": 66.2, "f281": 158.9, "f283": 0.5031, "f284": 0.839, "f285": 0.4192, "f286": 0.09524, "f288": 2.089, "f289": 1.307, "f290": 4.948, "f291": 1.682, "f292": 2.854}, {"name": "Gemma 4 31B (non-reasoning) (NVFP4)", "creator": "Google", "open_weights": true, "f35": 262100, "f37": 0, "f46": 17.31, "f47": 14.31, "f48": 12.85, "f49": 10.62, "f50": 10.46, "f51": 14.73, "f52": 15.38, "f53": 14.62, "f54": 12.77, "f55": 13.65, "f56": 10.19, "f57": 15.08, "f58": 10.88, "f59": 12.62, "f60": 13.88, "f61": 12.38, "f62": 12, "f82": 555.4, "f85": 0.7626, "f89": 0.1182, "f92": 0.5347, "f116": 0.4667, "f148": 9.572, "f149": 64.03, "f151": 1.567, "f152": 1.567, "f154": 0.7035, "f155": 10, "f171": 36.62, "f172": 1.176, "f173": 98.75, "f174": 3.136, "f271": 0.1, "f272": 0.34, "f274": 43.52, "f275": 1.309, "f276": 75.69, "f277": 2.163, "f282": 0.655, "f283": 0.08866, "f284": 0.2921, "f287": 0.303}, {"name": "Gemini 4 Argon (high) AI Studio (1M output)", "creator": "Google", "open_weights": false, "f0": 1153, "f1": 1120, "f2": 1186, "f4": 0.4875, "f6": 0.7751, "f7": 1551, "f8": 1530, "f9": 1571, "f10": 1483, "f11": 1473, "f12": 1494, "f13": 1305, "f14": 1288, "f15": 1321, "f16": 0.6463, "f17": 1483, "f18": 834.4, "f19": 0.95, "f20": 0.2, "f21": 2, "f22": 33695739, "f23": 7553860287, "f24": 113329224, "f25": 79633485, "f26": 53.96, "f27": 57.3, "f28": 55.92, "f29": 51.28, "f30": 54.58, "f31": 57.2, "f32": 1259, "f33": 1237, "f34": 1281, "f35": 1000000, "f36": 7.125, "f37": 0.2714, "f38": 0.525, "f43": 166.3, "f44": 40, "f63": 6.7, "f64": 7.1, "f65": 6.45, "f66": 8.12, "f67": 3.71, "f68": 6.43, "f69": 1236, "f70": 7.72, "f71": 5.99, "f72": 6.29, "f73": 5.79, "f74": 7.16, "f75": 6.92, "f76": 8.13, "f77": 7, "f78": 0.4345, "f79": 0.2571, "f80": 78.05, "f81": 0.218, "f82": 1631, "f83": 1611, "f84": 1651, "f86": 0.03889, "f87": 0.4905, "f88": 0.5505, "f89": 0.5709, "f90": 0.567, "f91": 4, "f94": 50.41, "f95": 673.9, "f96": 1388, "f97": 2342, "f98": 3836, "f99": 106.2, "f100": 2267, "f101": 0.9613, "f102": 2.071, "f103": 3.259, "f104": 5.355, "f105": 0.02454, "f106": 2.327, "f107": 1.366, "f108": 7.683, "f109": 1593, "f110": 6103, "f111": 48070, "f112": 116400, "f113": 68300, "f114": 1365, "f116": 0.7967, "f148": 51.98, "f149": 90.25, "f151": 46.41, "f152": 46.41, "f153": 0.1389, "f155": 1, "f156": 46.1, "f157": 0.483, "f158": 0.04255, "f159": 0.9574, "f165": 82.92, "f166": 65.79, "f167": 87.45, "f168": 77.97, "f169": 85.17, "f171": 67.97, "f172": 26.04, "f173": 101.9, "f174": 105.3, "f175": 78.23, "f176": 90.21, "f177": 72.68, "f178": 72.68, "f179": 53.23, "f180": 82.92, "f181": 47.2, "f182": 47.2, "f183": 33.66, "f184": 79.75, "f185": 27.39, "f186": 27.39, "f187": 44.87, "f188": 66.54, "f189": 37.35, "f190": 37.35, "f191": 51, "f192": 63, "f193": 75, "f194": 87, "f195": 38, "f196": 49, "f197": 71, "f198": 86, "f199": 33, "f200": 58, "f201": 66, "f202": 73, "f203": 15, "f204": 18, "f205": 70, "f206": 81, "f207": 57.92, "f208": 82.67, "f209": 43.07, "f210": 80.2, "f211": 48.02, "f212": 70.3, "f213": 15.85, "f214": 75.25, "f215": 4.963, "f216": 16.09, "f217": 17.16, "f218": 4902, "f219": 14.49, "f220": 6.967, "f221": 0.14, "f222": 2.809, "f223": 0.05, "f224": 0.01889, "f225": 0.6622, "f226": 5.081, "f227": 6.644, "f228": 3.881, "f229": 11.81, "f230": 10.42, "f231": 3.078, "f232": 21.22, "f233": 50.24, "f234": 0.02778, "f235": 789.5, "f236": 245.2, "f237": 743.1, "f238": 1459, "f239": 1091, "f240": 1455, "f241": 419.2, "f242": 744.2, "f243": 1227, "f244": 975.4, "f245": 1068, "f246": 774.7, "f247": 1060, "f248": 1575, "f249": 1239, "f250": 1226, "f251": 831.5, "f252": 1907, "f253": 848.1, "f254": 410.8, "f255": 1164, "f256": 1258, "f257": 1520, "f258": 1714, "f259": 1214, "f260": 401.9, "f261": 1710, "f262": 954, "f263": 938.3, "f264": 1230, "f265": 421, "f266": 2.94, "f267": 4.158, "f268": 12, "f269": 8, "f270": 0.4314, "f271": 4, "f272": 20, "f274": 79.19, "f275": 33.1, "f276": 98.04, "f277": 63.07, "f278": 0, "f279": 0.6181, "f281": 166.1, "f285": 0.5707, "f286": 0.5286, "f288": 47.2, "f289": 27.45, "f290": 99.07, "f291": 35.6, "f292": 68.09}, {"name": "Hermes 4 405B (non-reasoning) (FP8)", "creator": "Nous Research", "open_weights": true, "f3": 0.1533, "f35": 128000, "f37": 0, "f46": 16.42, "f47": 12.38, "f48": 10.73, "f49": 12, "f50": 10.23, "f51": 13.88, "f52": 14.16, "f53": 13.69, "f54": 11.96, "f55": 12.31, "f56": 9, "f57": 13.54, "f58": 10.88, "f59": 11.46, "f60": 12.5, "f61": 13.85, "f62": 13, "f85": 0.5364, "f89": 0.04217, "f92": 0.3476, "f116": 0.22, "f147": 0.546, "f148": 15.28, "f149": 38.57, "f151": 2.314, "f152": 2.314, "f155": 1, "f171": 17.51, "f172": 2.202, "f173": 45.58, "f174": 3.619, "f271": 1, "f272": 3, "f274": 29.49, "f275": 2.261, "f276": 42.02, "f277": 2.778, "f282": 0.2661, "f287": 0.09848}, {"name": "MiniMax-M3.1-Flash", "creator": "MiniMax", "open_weights": true, "f6": 0.7252, "f7": 1647, "f8": 1627, "f9": 1667, "f10": 1473, "f11": 1463, "f12": 1484, "f13": 1429, "f14": 1411, "f15": 1448, "f16": 0.478, "f17": 1473, "f18": 48.1, "f19": 0.9, "f20": 0.0142, "f22": 29191389, "f23": 12628828115, "f24": 161297593, "f25": 132106204, "f26": 38.83, "f27": 34.13, "f28": 39.14, "f29": 36.76, "f30": 33, "f31": 50.79, "f35": 1000000, "f36": 0.4168, "f37": 0.2229, "f38": 0.31, "f44": 60, "f78": 0.3858, "f79": 0.2082, "f81": 0.208, "f82": 1466, "f83": 1443, "f84": 1489, "f89": 0.4796, "f90": 0.281, "f91": 14, "f93": 23, "f94": 28.91, "f95": 17.51, "f96": 181.4, "f97": 77.2, "f98": 261.3, "f99": 2.636, "f100": 96.78, "f101": 0.02114, "f102": 0.2952, "f103": 0.1116, "f104": 0.4081, "f105": 0.001212, "f106": 0.08291, "f107": 0.06176, "f108": 0.491, "f109": 79.26, "f110": 358.1, "f111": 35240, "f112": 138200, "f113": 102900, "f114": 1142, "f116": 0.7967, "f148": 17.04, "f149": 160.4, "f150": 12.47, "f151": 13.92, "f152": 1.16, "f153": 0.1667, "f154": 0.7913, "f155": 12, "f156": -6.4, "f157": 0.4507, "f158": 0.9369, "f159": 0.06311, "f165": 118.3, "f166": 58.44, "f167": 198.6, "f168": 80.99, "f169": 150.5, "f170": 428, "f171": 82.59, "f172": 0.7166, "f173": 209.8, "f174": 3.423, "f175": 17.77, "f176": 156.6, "f177": 14.58, "f178": 1.808, "f179": 22.5, "f180": 118.3, "f181": 18.28, "f182": 1.365, "f183": 23.17, "f184": 114.6, "f185": 18.81, "f186": 1.361, "f187": 25.72, "f188": 100.6, "f189": 20.75, "f190": 0.8668, "f191": 51, "f192": 66, "f193": 16, "f194": 22, "f195": 10, "f196": 12, "f197": 29, "f198": 37, "f199": 64, "f200": 92, "f201": 24, "f202": 29, "f203": 26, "f204": 35, "f205": 9, "f206": 13, "f207": 60.4, "f208": 18.32, "f209": 10.9, "f210": 35.65, "f211": 72.77, "f212": 25.75, "f213": 28.23, "f214": 10.9, "f215": 2.594, "f216": 15.47, "f217": 10.59, "f218": 3361, "f219": 7.627, "f220": 3.417, "f221": 0.05556, "f222": 2.846, "f223": 0.01222, "f224": 0.01556, "f225": 0.01667, "f226": 3.509, "f227": 0.5589, "f228": 3.042, "f229": 11.13, "f230": 0.4711, "f231": 2.054, "f232": 7.741, "f233": 33.12, "f234": 0.2167, "f235": 483.8, "f236": 811.5, "f237": 1012, "f238": 1157, "f239": 966.9, "f240": 679.3, "f241": 1005, "f242": 774.8, "f243": 865.5, "f244": 477.9, "f245": 905.8, "f246": 853.8, "f247": 607.3, "f248": 677.7, "f249": 1111, "f250": 872.6, "f251": 812.1, "f252": 969, "f253": 736.3, "f254": 539.2, "f255": 1015, "f256": 742.5, "f257": 1264, "f258": 1368, "f259": 1079, "f260": 607.1, "f261": 1164, "f262": 859.5, "f263": 1033, "f264": 1076, "f265": 201.8, "f266": 0.1005, "f267": 0.1545, "f268": 0.375, "f269": 0.2625, "f270": 0.02206, "f271": 0.1425, "f272": 0.57, "f274": 115.6, "f275": 0.9656, "f276": 181.3, "f277": 2.041, "f278": 2000, "f279": 0.5336, "f285": 0.2576, "f286": 0.03333, "f288": 1.365, "f289": 0.6098, "f290": 5.47, "f291": 1.052, "f292": 2.481}, {"name": "DeepSeek V4 Pro 0813 (non-reasoning)", "creator": "DeepSeek", "open_weights": true, "f6": 0.3491, "f17": 927.9, "f20": 0.04, "f35": 1049000, "f37": 0, "f81": 0.036, "f82": 1066, "f89": 0.1057, "f90": 0.072, "f116": 0.5067, "f148": 6.879, "f149": 102.4, "f151": 1.552, "f152": 1.552, "f155": 4, "f156": -19.07, "f157": 0.386, "f159": 0.0608, "f171": 50.96, "f172": 0.8585, "f173": 193.1, "f174": 2.274, "f271": 0.5, "f272": 2, "f274": 69.93, "f275": 1.382, "f276": 170.7, "f277": 1.752, "f279": 0.3993, "f285": 0.01515}, {"name": "Gemma 4 E4B", "creator": "Google", "open_weights": true, "f6": 0.004615, "f17": 0, "f35": 131072, "f37": 0.005714, "f81": 0.01, "f82": -28.98, "f85": 0.5758, "f89": 0.03753, "f92": 0.4422, "f116": 0.32, "f148": 54.54, "f149": 46.68, "f150": 42.85, "f151": 43.83, "f152": 0.9848, "f154": 0.5139, "f155": 1, "f171": 21.74, "f172": 0.6797, "f173": 63.88, "f174": 1.677, "f271": 0.02, "f272": 0.1, "f274": 36.43, "f275": 0.8619, "f276": 54.56, "f277": 1.242, "f279": 0.2442, "f282": 0.2076, "f284": 0.01873, "f285": 0, "f287": 0.08333}, {"name": "Reka Flash 3", "creator": "Reka AI", "open_weights": true, "f3": 0.3367, "f35": 53970, "f37": 0, "f85": 0.5293, "f89": 0.0444, "f92": 0.3041, "f116": 0, "f147": 0.4349, "f148": 28.87, "f149": 91, "f150": 21.98, "f151": 23.37, "f152": 1.396, "f155": 1, "f171": 70.96, "f172": 1.301, "f173": 97.2, "f174": 1.686, "f271": 0.1, "f272": 0.2, "f274": 83.4, "f275": 1.349, "f276": 93.82, "f277": 1.493, "f282": 0, "f287": 0}, {"name": "Mistral Medium 3.5", "creator": "Mistral", "open_weights": true, "f4": 0.125, "f6": 0.063, "f17": 523.3, "f20": 0.15, "f35": 262144, "f37": 0, "f43": 141.4, "f45": 0.3372, "f63": 4.84, "f64": 1, "f65": 1, "f66": 1, "f67": 3.34, "f68": 5.46, "f69": 983.1, "f70": 1, "f71": 1, "f72": 4.75, "f73": 4.03, "f74": 1, "f75": 5.09, "f76": 7.42, "f77": 7.05, "f81": 0.028, "f82": 768.9, "f85": 0.7485, "f89": 0.1376, "f90": 0.047, "f92": 0.6878, "f116": 0.6933, "f148": 19.42, "f149": 146.3, "f150": 13.67, "f151": 16, "f152": 2.332, "f153": 0.1, "f154": 0.6486, "f155": 1, "f156": -38.7, "f157": 0.2303, "f159": 0.1979, "f171": 106.5, "f172": 2.178, "f173": 197.3, "f174": 3.319, "f271": 1.5, "f272": 7.5, "f274": 127.5, "f275": 2.221, "f276": 171.7, "f277": 2.654, "f279": 0.4016, "f281": 141.8, "f282": 0.9415, "f283": 0.1505, "f284": 0.5056, "f285": 0, "f286": 0, "f287": 0.3333}, {"name": "Claude Opus 5.5 (xhigh with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.6495, "f7": 2081, "f8": 2061, "f9": 2104, "f10": 1760, "f11": 1750, "f12": 1771, "f13": 1642, "f14": 1623, "f15": 1661, "f16": 0.6061, "f17": 1760, "f18": 1116, "f19": 0.95, "f20": 0.2, "f21": 5, "f22": 34789796, "f23": 9015773466, "f24": 100823907, "f25": 66034111, "f26": 60, "f27": 62.47, "f28": 55.72, "f29": 55.51, "f30": 54.72, "f31": 59, "f35": 1000000, "f36": 6.047, "f37": 0.3171, "f38": 0.63, "f44": 50, "f78": 0.5354, "f79": 0.4375, "f81": 0.266, "f82": 1837, "f83": 1814, "f84": 1860, "f89": 0.5751, "f90": 0.64, "f91": 1, "f94": 56.99, "f95": 695.8, "f96": 1763, "f97": 911.1, "f98": 2749, "f99": 75.43, "f100": 2016, "f101": 0.7927, "f102": 2.793, "f103": 1.151, "f104": 3.979, "f105": 0.03569, "f106": 2.068, "f107": 1.275, "f108": 6.047, "f109": 1321, "f110": 4766, "f111": 39630, "f112": 103400, "f113": 63760, "f114": 782.4, "f116": 0.8467, "f148": 117.3, "f149": 84.69, "f151": 111.4, "f152": 111.4, "f153": 0.25, "f154": 0.8659, "f155": 1, "f156": 43.13, "f157": 0.6553, "f158": 0.6499, "f159": 0.3501, "f165": 84.69, "f166": 68.49, "f167": 93.18, "f168": 74.29, "f169": 88.96, "f171": 68.49, "f172": 21.57, "f173": 93.18, "f174": 249.9, "f175": 93.83, "f176": 90.08, "f177": 88.28, "f178": 88.28, "f179": 117.3, "f180": 84.69, "f181": 111.4, "f182": 111.4, "f183": 88.59, "f184": 83.62, "f185": 82.61, "f186": 82.61, "f187": 77.25, "f188": 69.34, "f189": 70.04, "f190": 70.04, "f266": 2.94, "f267": 4.158, "f268": 12, "f269": 8, "f270": 0.4314, "f271": 4, "f272": 20, "f274": 74.29, "f275": 31.9, "f276": 88.96, "f277": 163.8, "f278": 0, "f279": 0.6505, "f285": 0.596, "f286": 0.619, "f288": 111.4, "f289": 21.57, "f290": 249.9, "f291": 31.9, "f292": 163.8}, {"name": "GPT-6 Astra (high)", "creator": "OpenAI", "open_weights": false, "f6": 0.6661, "f7": 1672, "f8": 1657, "f9": 1688, "f10": 1504, "f11": 1496, "f12": 1513, "f13": 1465, "f14": 1450, "f15": 1481, "f16": 0.5081, "f17": 1504, "f18": 433.5, "f19": 0.9, "f20": 1, "f21": 12.5, "f22": 12031650, "f23": 1034484385, "f24": 25584856, "f25": 13553206, "f26": 56.65, "f27": 59.98, "f28": 56.13, "f29": 51.57, "f30": 55.06, "f31": 57.2, "f35": 1000000, "f36": 3.239, "f37": 0.2886, "f38": 0.715, "f40": 3.924, "f41": 73.23, "f42": 82.3, "f44": 40, "f79": 0.4014, "f81": 0.31, "f82": 1537, "f83": 1517, "f84": 1557, "f85": 0.9495, "f89": 0.5306, "f90": 0.593, "f91": 1, "f94": 54.85, "f95": 601.6, "f96": 953.3, "f97": 797.9, "f98": 1925, "f99": 173.5, "f100": 1279, "f101": 0.5521, "f102": 1.198, "f103": 0.801, "f104": 2.082, "f105": 0.08252, "f106": 1.157, "f107": 0.6046, "f108": 3.239, "f109": 677.7, "f110": 3204, "f111": 11040, "f112": 23130, "f113": 12090, "f114": 374.2, "f116": 0.8, "f148": 39.65, "f149": 61.84, "f151": 31.56, "f152": 31.56, "f153": 0.3278, "f154": 0.8642, "f155": 1, "f156": 44.57, "f157": 0.611, "f158": 0.425, "f159": 0.575, "f165": 61.84, "f166": 41.05, "f167": 87.25, "f168": 49.62, "f169": 70.93, "f171": 41.05, "f172": 12.67, "f173": 87.25, "f174": 146.5, "f175": 136.2, "f176": 86.04, "f177": 130.4, "f178": 130.4, "f179": 39.65, "f180": 61.84, "f181": 31.56, "f182": 31.56, "f183": 42.06, "f184": 65.75, "f185": 34.46, "f186": 34.46, "f187": 32.17, "f188": 47.65, "f189": 21.68, "f190": 21.68, "f266": 7.7, "f267": 10.4, "f268": 30, "f269": 20, "f270": 1.569, "f271": 10, "f272": 50, "f274": 49.62, "f275": 16.67, "f276": 70.93, "f277": 55.48, "f278": 0, "f279": 0.5544, "f283": 0.4, "f284": 0.8989, "f285": 0.5404, "f286": 0.5952, "f288": 31.56, "f289": 12.67, "f290": 146.5, "f291": 16.67, "f292": 55.48}, {"name": "Nemotron 3.5 Super VL (NVFP4)", "creator": "NVIDIA", "open_weights": true, "f6": 0.1482, "f7": 996.7, "f8": 979.1, "f9": 1014, "f10": 998.8, "f11": 989.2, "f12": 1008, "f13": 997.8, "f14": 980.3, "f15": 1015, "f16": 0.2687, "f17": 998.8, "f18": 46.38, "f19": 0.8, "f20": 0.08, "f22": 22885169, "f23": 4651335463, "f24": 119398188, "f25": 96513019, "f26": 26.96, "f27": 23.46, "f28": 26.7, "f29": 20.95, "f30": 25.29, "f31": 21.76, "f35": 1000000, "f36": 0.5214, "f37": 0.1057, "f38": 0.135, "f44": 40, "f78": 0.2552, "f79": 0.06109, "f81": 0.08, "f82": 1162, "f83": 1144, "f84": 1181, "f89": 0.3072, "f90": 0.088, "f91": 8, "f93": 12, "f94": 13.62, "f95": 13.16, "f96": 180.9, "f97": 230.6, "f98": 413.5, "f99": 2.076, "f100": 68.65, "f101": 0.01454, "f102": 0.227, "f103": 0.2818, "f104": 0.5097, "f105": 0.0009502, "f106": 0.04682, "f107": 0.03229, "f108": 0.5565, "f109": 55.49, "f110": 482.2, "f111": 25280, "f112": 81430, "f113": 56150, "f114": 159.9, "f116": 0.69, "f148": 6.382, "f149": 464.6, "f150": 4.305, "f151": 5.381, "f152": 0.6837, "f153": 0.1333, "f155": 7, "f156": -2.867, "f157": 0.2117, "f158": 0.3049, "f159": 0.6951, "f160": 6, "f161": 83.33, "f162": 6, "f163": 1.5, "f164": 1.5, "f165": 443.6, "f166": 127.8, "f167": 696.7, "f168": 194.7, "f169": 547.6, "f170": 120, "f171": 189.4, "f172": 0.5731, "f173": 571.6, "f174": 1.417, "f175": 8.445, "f176": 470.3, "f177": 7.382, "f178": 3.129, "f179": 6.434, "f180": 443.6, "f181": 5.307, "f182": 0.7984, "f183": 6.624, "f184": 412.3, "f185": 5.411, "f186": 0.56, "f187": 12.08, "f188": 219, "f189": 9.796, "f190": 0.6629, "f191": 15, "f192": 28, "f193": 62, "f194": 70, "f195": 46, "f196": 53, "f197": 49, "f198": 61, "f199": 95, "f200": 100, "f201": 59, "f202": 67, "f203": 41, "f204": 56, "f205": 37, "f206": 51, "f207": 20.8, "f208": 67.83, "f209": 50.5, "f210": 57.92, "f211": 97.52, "f212": 65.35, "f213": 48.02, "f214": 43.07, "f215": 3.844, "f216": 14.57, "f217": 14.94, "f218": 4158, "f219": 10.44, "f220": 9.944, "f221": 0.1489, "f222": 3.406, "f223": 0.01667, "f224": 0.01667, "f225": 0.06778, "f226": 5.807, "f227": 2.392, "f228": 3.78, "f229": 11.58, "f230": 7.562, "f231": 3.136, "f232": 13.51, "f233": 45.75, "f234": 0.4144, "f235": 634.4, "f236": 740.8, "f237": 882.2, "f238": 1032, "f239": 1140, "f240": 1054, "f241": 553.3, "f242": 792.1, "f243": 1268, "f244": 834.3, "f245": 854.3, "f246": 983.6, "f247": 986.4, "f248": 1049, "f249": 1260, "f250": 1059, "f251": 936.8, "f252": 1509, "f253": 722.1, "f254": 736.1, "f255": 849.7, "f256": 917.1, "f257": 1373, "f258": 1610, "f259": 1411, "f260": 568.4, "f261": 1655, "f262": 1007, "f263": 1079, "f264": 971.1, "f265": 497, "f266": 0.1375, "f267": 0.2285, "f268": 0.4, "f269": 0.3125, "f270": 0.05686, "f271": 0.1, "f272": 0.4, "f274": 314.9, "f275": 0.6367, "f276": 508.2, "f277": 0.8161, "f278": 2000, "f279": 0.478, "f285": 0, "f286": 0, "f288": 0.7984, "f289": 0.291, "f290": 1.961, "f291": 0.5088, "f292": 1.291}, {"name": "GPT-6.1 Sol (low)", "creator": "OpenAI", "open_weights": false, "f6": 0.5257, "f7": 1237, "f8": 1218, "f9": 1256, "f10": 1114, "f11": 1104, "f12": 1124, "f13": 981.4, "f14": 963.2, "f15": 999.5, "f16": 0.3333, "f17": 1114, "f18": 16.12, "f19": 0.95, "f20": 0.1, "f21": 2.5, "f22": 6215767, "f23": 456311809, "f24": 8177481, "f25": 1961714, "f26": 43.44, "f27": 42.27, "f28": 44.25, "f29": 39.68, "f30": 42.93, "f31": 45.57, "f35": 1000000, "f36": 0.1615, "f37": 0.2486, "f38": 0.595, "f44": 20, "f78": 0.3668, "f79": 0.2016, "f81": 0.27, "f82": 1323, "f83": 1301, "f84": 1344, "f89": 0.4736, "f90": 0.382, "f91": 1, "f94": 34.5, "f95": 62.16, "f96": 40.67, "f97": 81.16, "f98": 156.1, "f99": 34.3, "f100": 81.77, "f101": 0.04253, "f102": 0.03257, "f103": 0.05423, "f104": 0.1031, "f105": 0.0163, "f106": 0.05838, "f107": 0.01585, "f108": 0.1615, "f109": 19.62, "f110": 237.9, "f111": 4253, "f112": 5838, "f113": 1585, "f114": 97.51, "f116": 0.84, "f148": 9.662, "f149": 63.91, "f151": 1.838, "f152": 1.838, "f153": 0.2667, "f154": 0.8312, "f155": 1, "f156": 38, "f157": 0.5863, "f158": 0.4988, "f159": 0.5012, "f165": 63.91, "f166": 37.94, "f167": 98.2, "f168": 45.11, "f169": 78.22, "f171": 37.94, "f172": 1.139, "f173": 98.2, "f174": 4.161, "f175": 12.73, "f176": 75.45, "f177": 6.1, "f178": 6.1, "f179": 9.662, "f180": 63.91, "f181": 1.838, "f182": 1.838, "f183": 10.76, "f184": 56.99, "f185": 1.982, "f186": 1.982, "f187": 13.11, "f188": 44.46, "f189": 1.863, "f190": 1.863, "f266": 1.47, "f267": 2.079, "f268": 6, "f269": 4, "f270": 0.2157, "f271": 2, "f272": 10, "f274": 45.11, "f275": 1.239, "f276": 78.22, "f277": 2.418, "f278": 0, "f279": 0.5324, "f285": 0.3081, "f286": 0.1095, "f288": 1.838, "f289": 1.139, "f290": 4.161, "f291": 1.239, "f292": 2.418}, {"name": "GPT-6.1 Terra (xhigh)", "creator": "OpenAI", "open_weights": false, "f6": 0.5993, "f7": 1386, "f8": 1367, "f9": 1405, "f10": 1333, "f11": 1322, "f12": 1343, "f13": 1370, "f14": 1352, "f15": 1388, "f16": 0.4081, "f17": 1333, "f18": 36.93, "f19": 0.95, "f20": 0.05, "f21": 1.25, "f22": 12205846, "f23": 2141453088, "f24": 34722763, "f25": 22516917, "f26": 46.74, "f27": 49.12, "f28": 47.64, "f30": 43.76, "f31": 48.66, "f35": 1000000, "f36": 0.4007, "f37": 0.2657, "f38": 0.575, "f44": 50, "f78": 0.4135, "f79": 0.3686, "f81": 0.266, "f82": 1415, "f83": 1393, "f84": 1438, "f89": 0.4374, "f90": 0.423, "f91": 1, "f94": 44.95, "f95": 61.03, "f96": 101.9, "f97": 107.5, "f98": 226.6, "f99": 17.15, "f100": 173.6, "f101": 0.06003, "f102": 0.1486, "f103": 0.1129, "f104": 0.2697, "f105": 0.00815, "f106": 0.131, "f107": 0.07097, "f108": 0.4007, "f109": 112.6, "f110": 400.2, "f111": 12010, "f112": 26200, "f113": 14190, "f114": 286.6, "f116": 0.8167, "f148": 35.66, "f149": 90.92, "f151": 30.17, "f152": 30.17, "f154": 0.8382, "f155": 1, "f156": 28.93, "f157": 0.4803, "f158": 0.3675, "f159": 0.6325, "f165": 90.92, "f166": 76.87, "f167": 110.4, "f168": 90.39, "f169": 93.78, "f171": 76.87, "f172": 12.25, "f173": 110.4, "f174": 76.14, "f175": 39.73, "f176": 90.89, "f177": 34.23, "f178": 34.23, "f179": 35.66, "f180": 90.92, "f181": 30.17, "f182": 30.17, "f183": 41.3, "f184": 90.99, "f185": 35.81, "f186": 35.81, "f187": 32.8, "f188": 95.3, "f189": 27.55, "f190": 27.55, "f266": 0.735, "f267": 1.04, "f268": 3, "f269": 2, "f270": 0.1078, "f271": 1, "f272": 5, "f274": 90.39, "f275": 15.28, "f276": 93.78, "f277": 47.9, "f278": 0, "f279": 0.5336, "f285": 0.4646, "f286": 0.419, "f288": 30.17, "f289": 12.25, "f290": 76.14, "f291": 15.28, "f292": 47.9}, {"name": "GPT-6 Astra (medium)", "creator": "OpenAI", "open_weights": false, "f6": 0.6459, "f7": 1641, "f8": 1624, "f9": 1657, "f10": 1460, "f11": 1452, "f12": 1469, "f13": 1416, "f14": 1403, "f15": 1431, "f16": 0.4747, "f17": 1460, "f18": 358.5, "f19": 0.9, "f20": 1, "f21": 12.5, "f22": 10651314, "f23": 937930065, "f24": 18172704, "f25": 7521390, "f26": 53.9, "f27": 56.7, "f28": 53.69, "f29": 49.64, "f30": 51.83, "f31": 55.66, "f35": 1000000, "f36": 2.732, "f37": 0.2914, "f38": 0.71, "f40": 3.075, "f41": 72.79, "f42": 82.3, "f44": 30, "f79": 0.3658, "f81": 0.304, "f82": 1498, "f83": 1480, "f84": 1516, "f85": 0.9394, "f89": 0.5273, "f90": 0.527, "f91": 1, "f94": 51.45, "f95": 532.6, "f96": 865.3, "f97": 690.8, "f98": 1730, "f99": 173.5, "f100": 908.6, "f101": 0.4735, "f102": 1.077, "f103": 0.6701, "f104": 1.83, "f105": 0.08252, "f106": 0.9026, "f107": 0.429, "f108": 2.732, "f109": 376.1, "f110": 2638, "f111": 9471, "f112": 18050, "f113": 8581, "f114": 310.2, "f116": 0.7967, "f148": 12.03, "f149": 57.21, "f151": 3.295, "f152": 3.295, "f153": 0.3833, "f154": 0.8509, "f155": 1, "f156": 41.4, "f157": 0.5963, "f158": 0.4517, "f159": 0.5483, "f165": 57.21, "f166": 36.98, "f167": 86.3, "f168": 47.81, "f169": 72.37, "f171": 36.98, "f172": 2.048, "f173": 86.3, "f174": 15.07, "f175": 26.38, "f176": 78.48, "f177": 20, "f178": 20, "f179": 12.03, "f180": 57.21, "f181": 3.295, "f182": 3.295, "f183": 12.78, "f184": 56.89, "f185": 3.993, "f186": 3.993, "f187": 11.51, "f188": 49.57, "f189": 1.425, "f190": 1.425, "f266": 7.7, "f267": 10.4, "f268": 30, "f269": 20, "f270": 1.569, "f271": 10, "f272": 50, "f274": 47.81, "f275": 2.509, "f276": 72.37, "f277": 5.586, "f278": 0, "f279": 0.5417, "f283": 0.3546, "f284": 0.8951, "f285": 0.4949, "f286": 0.5333, "f288": 3.295, "f289": 2.048, "f290": 15.07, "f291": 2.509, "f292": 5.586}, {"name": "GPT-6.1 Terra (high)", "creator": "OpenAI", "open_weights": false, "f6": 0.5846, "f7": 1294, "f8": 1276, "f9": 1313, "f10": 1264, "f11": 1254, "f12": 1274, "f13": 1309, "f14": 1291, "f15": 1327, "f16": 0.3768, "f17": 1264, "f18": 25.08, "f19": 0.95, "f20": 0.05, "f21": 1.25, "f22": 10194984, "f23": 1363969736, "f24": 20580034, "f25": 10385050, "f26": 43.63, "f27": 46.32, "f28": 44.21, "f30": 42.5, "f31": 47.45, "f35": 1000000, "f36": 0.2593, "f37": 0.2571, "f38": 0.605, "f44": 40, "f78": 0.3716, "f79": 0.3746, "f81": 0.28, "f82": 1353, "f83": 1330, "f84": 1376, "f89": 0.4328, "f90": 0.354, "f91": 1, "f94": 42.33, "f95": 50.97, "f96": 64.03, "f97": 82.71, "f98": 163.9, "f99": 17.15, "f100": 102.9, "f101": 0.04564, "f102": 0.08831, "f103": 0.07909, "f104": 0.1755, "f105": 0.00815, "f106": 0.08373, "f107": 0.03809, "f108": 0.2593, "f109": 51.93, "f110": 266.8, "f111": 9129, "f112": 16750, "f113": 7618, "f114": 179.9, "f116": 0.8233, "f148": 13.74, "f149": 90.94, "f151": 8.244, "f152": 8.244, "f154": 0.8382, "f155": 1, "f156": 27.77, "f157": 0.4727, "f158": 0.3698, "f159": 0.6302, "f165": 90.94, "f166": 77.19, "f167": 101.1, "f168": 90.87, "f169": 94.72, "f171": 77.19, "f172": 2.704, "f173": 101.1, "f174": 30.54, "f175": 11.06, "f176": 90.9, "f177": 5.555, "f178": 5.555, "f179": 13.74, "f180": 90.94, "f181": 8.244, "f182": 8.244, "f183": 15.83, "f184": 92.27, "f185": 10.41, "f186": 10.41, "f187": 12.53, "f188": 92.47, "f189": 7.128, "f190": 7.128, "f266": 0.735, "f267": 1.04, "f268": 3, "f269": 2, "f270": 0.1078, "f271": 1, "f272": 5, "f274": 90.87, "f275": 5.72, "f276": 94.72, "f277": 13.67, "f278": 0, "f279": 0.5162, "f285": 0.4192, "f286": 0.3333, "f288": 8.244, "f289": 2.704, "f290": 30.54, "f291": 5.72, "f292": 13.67}, {"name": "Mistral Large 4 (high)", "creator": "Mistral", "open_weights": true, "f6": 0.5783, "f7": 1445, "f8": 1427, "f9": 1463, "f10": 1349, "f11": 1340, "f12": 1359, "f13": 1250, "f14": 1233, "f15": 1267, "f16": 0.4837, "f17": 1349, "f18": 102.3, "f19": 0.9, "f20": 0.07, "f21": 0.7, "f22": 22074606, "f23": 7471723649, "f24": 107091351, "f25": 85016745, "f26": 36.85, "f27": 33.34, "f28": 39.05, "f30": 34.57, "f31": 43.29, "f35": 1000000, "f36": 2.061, "f37": 0.1, "f38": 0.26, "f44": 40, "f79": 0.1496, "f81": 0.176, "f90": 0.173, "f91": 1, "f93": 52, "f94": 26.02, "f95": 46.36, "f96": 455.1, "f97": 670, "f98": 1135, "f99": 9.539, "f100": 224.9, "f101": 0.05765, "f102": 0.7818, "f103": 1.103, "f104": 1.889, "f105": 0.004501, "f106": 0.1721, "f107": 0.1145, "f108": 2.061, "f109": 178.5, "f110": 1359, "f111": 27450, "f112": 81950, "f113": 54500, "f114": 381.6, "f148": 16.92, "f149": 161.3, "f150": 12.4, "f151": 13.82, "f152": 1.423, "f155": 1, "f156": 5.133, "f157": 0.26, "f158": 0.282, "f159": 0.718, "f165": 161.3, "f166": 142.6, "f167": 191.6, "f168": 150.9, "f169": 178.1, "f170": 1050, "f171": 142.6, "f172": 1.355, "f173": 191.6, "f174": 1.499, "f175": 28.19, "f176": 129.4, "f177": 24.32, "f178": 8.863, "f179": 16.92, "f180": 161.3, "f181": 13.82, "f182": 1.423, "f183": 17.67, "f184": 169.1, "f185": 14.71, "f186": 2.881, "f187": 17.21, "f188": 163.5, "f189": 14.15, "f190": 1.917, "f266": 0.399, "f267": 0.7139, "f268": 1.4, "f269": 1.05, "f270": 0.09608, "f271": 0.7, "f272": 2.1, "f274": 150.9, "f275": 1.386, "f276": 178.1, "f277": 1.465, "f278": 2000, "f285": 0.2475, "f286": 0.04286, "f288": 1.423, "f289": 1.355, "f290": 1.499, "f291": 1.386, "f292": 1.465}, {"name": "Claude Opus 5.5 (medium with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.6122, "f7": 1860, "f8": 1842, "f9": 1879, "f10": 1621, "f11": 1612, "f12": 1631, "f13": 1505, "f14": 1489, "f15": 1523, "f16": 0.5697, "f17": 1621, "f18": 400.2, "f19": 0.95, "f20": 0.2, "f21": 5, "f22": 22793378, "f23": 3246136911, "f24": 42531163, "f25": 19737785, "f26": 54.33, "f27": 53.6, "f28": 50.75, "f29": 51.42, "f30": 49.71, "f31": 55.99, "f35": 1000000, "f36": 2.451, "f37": 0.2771, "f38": 0.525, "f44": 30, "f78": 0.5705, "f79": 0.3308, "f81": 0.256, "f82": 1593, "f83": 1573, "f84": 1614, "f89": 0.5473, "f90": 0.514, "f91": 1, "f94": 48.06, "f95": 455.9, "f96": 626.3, "f97": 478.9, "f98": 1181, "f99": 75.45, "f100": 850.6, "f101": 0.4628, "f102": 0.9999, "f103": 0.5391, "f104": 1.575, "f105": 0.03569, "f106": 0.8764, "f107": 0.4136, "f108": 2.451, "f109": 394.8, "f110": 2031, "f111": 23140, "f112": 43820, "f113": 20680, "f114": 348.2, "f116": 0.8433, "f148": 16.96, "f149": 79.41, "f151": 10.66, "f152": 10.66, "f153": 0.2222, "f154": 0.8572, "f155": 1, "f156": 39.77, "f157": 0.639, "f158": 0.6685, "f159": 0.3315, "f165": 79.41, "f166": 62.45, "f167": 96.4, "f168": 66.67, "f169": 87.97, "f171": 62.45, "f172": 5.934, "f173": 96.4, "f174": 42.7, "f175": 99.75, "f176": 101.5, "f177": 94.83, "f178": 94.83, "f179": 16.96, "f180": 79.41, "f181": 10.66, "f182": 10.66, "f183": 18.08, "f184": 77.8, "f185": 11.66, "f186": 11.66, "f187": 16.34, "f188": 63.01, "f189": 8.405, "f190": 8.405, "f266": 2.94, "f267": 4.158, "f268": 12, "f269": 8, "f270": 0.4314, "f271": 4, "f272": 20, "f274": 66.67, "f275": 7.81, "f276": 87.97, "f277": 20.28, "f278": 0, "f279": 0.5926, "f285": 0.5253, "f286": 0.4333, "f288": 10.66, "f289": 5.934, "f290": 42.7, "f291": 7.81, "f292": 20.28}, {"name": "Ring-2.6-1T", "creator": "InclusionAI", "open_weights": true, "f6": 0.007179, "f17": 658, "f35": 262144, "f37": 0.03714, "f81": 0.038, "f82": 753.3, "f85": 0.8566, "f89": 0.2159, "f92": 0.4456, "f116": 0.7, "f148": 25.72, "f149": 113.6, "f150": 17.6, "f151": 21.32, "f152": 3.717, "f153": 0.03889, "f155": 1, "f156": -36.03, "f157": 0.263, "f159": 0.1542, "f171": 61.82, "f172": 3.253, "f173": 150.3, "f174": 4.709, "f271": 0.3, "f272": 2.5, "f274": 78.21, "f275": 3.441, "f276": 137.9, "f277": 3.941, "f279": 0.4502, "f282": 0.924, "f283": 0.1794, "f284": 0.4307, "f285": 0.005051, "f287": 0.2879}, {"name": "Phi-4", "creator": "Microsoft", "open_weights": true, "f3": 0.18, "f35": 16380, "f37": 0, "f43": 130.5, "f85": 0.5747, "f89": 0.0376, "f92": 0.2354, "f116": 0, "f147": 0.2307, "f148": 10.59, "f149": 69.21, "f151": 1.876, "f152": 1.876, "f155": 2, "f171": 55.81, "f172": 1.72, "f173": 76.52, "f174": 9.493, "f271": 0.07, "f272": 0.14, "f274": 65.16, "f275": 1.762, "f276": 73.4, "f277": 2.171, "f282": 0, "f287": 0.03788}, {"name": "gpt-oss-120b (high)", "creator": "OpenAI", "open_weights": true, "f3": 0.9344, "f5": 0.03097, "f6": 0.001991, "f17": 0, "f35": 131100, "f37": 0.01143, "f43": 139.8, "f45": 0.2554, "f46": 16.38, "f47": 10.27, "f48": 6.15, "f49": 13.04, "f50": 6.62, "f51": 10.88, "f52": 12.82, "f53": 11.62, "f54": 8.31, "f55": 7.54, "f56": 8.31, "f57": 10.15, "f58": 9.85, "f59": 12.31, "f60": 8.65, "f61": 12.65, "f62": 11.38, "f78": 0.01222, "f81": 0.04, "f82": 616, "f85": 0.7818, "f89": 0.196, "f90": 0.038, "f92": 0.6898, "f115": 0.0565, "f116": 0.52, "f147": 0.8783, "f148": 13.06, "f149": 203.2, "f150": 10.01, "f151": 10.56, "f152": 0.76, "f153": 0.01667, "f155": 15, "f171": 113.5, "f172": 0.5803, "f173": 306.2, "f174": 1.835, "f271": 0.03, "f272": 0.17, "f274": 166.1, "f275": 0.6504, "f276": 233.3, "f277": 1.033, "f279": 0.3403, "f280": 22.1, "f281": 138.9, "f282": 0.6579, "f283": 0.1278, "f284": 0.2622, "f285": 0, "f286": 0, "f287": 0.2348}, {"name": "DeepSeek V4.1 Flash 1017 (max)", "creator": "DeepSeek", "open_weights": true, "f6": 0.6664, "f7": 1766, "f8": 1747, "f9": 1784, "f10": 1570, "f11": 1560, "f12": 1580, "f13": 1602, "f14": 1584, "f15": 1621, "f16": 0.4747, "f17": 1570, "f18": 61.72, "f19": 0.98, "f20": 0.0029, "f22": 39888665, "f23": 19783376740, "f24": 174355958, "f25": 134467293, "f26": 40.31, "f27": 37.5, "f28": 42.16, "f29": 41.32, "f30": 37.73, "f31": 49.22, "f35": 1048576, "f36": 0.193, "f37": 0.24, "f38": 0.24, "f43": 158.7, "f44": 60, "f78": 0.4366, "f79": 0.2847, "f80": 46.34, "f81": 0.172, "f82": 1746, "f83": 1725, "f84": 1767, "f89": 0.4333, "f90": 0.253, "f91": 24, "f93": 16, "f94": 32.49, "f95": 47.87, "f96": 114.8, "f97": 194.1, "f98": 311.4, "f99": 2.519, "f100": 209.2, "f101": 0.05802, "f102": 0.1782, "f103": 0.256, "f104": 0.4354, "f105": 0.001153, "f106": 0.1668, "f107": 0.1087, "f108": 0.6021, "f109": 161.4, "f110": 520.6, "f111": 48350, "f112": 139000, "f113": 90620, "f114": 517.9, "f116": 0.8267, "f148": 11.06, "f149": 242.4, "f150": 8.252, "f151": 8.979, "f152": 0.7905, "f153": 0.2667, "f154": 0.8064, "f155": 19, "f156": 0.9, "f157": 0.396, "f158": 0.6407, "f159": 0.3593, "f160": 6, "f161": 44.44, "f162": 2, "f163": 0, "f164": 0, "f165": 178.8, "f166": 150.1, "f167": 215.8, "f168": 164.6, "f169": 200.4, "f170": 552, "f171": 170.5, "f172": 0.5331, "f173": 362.6, "f174": 2.68, "f175": 14.04, "f176": 216.6, "f177": 11.73, "f178": 2.498, "f179": 15.19, "f180": 178.8, "f181": 12.39, "f182": 1.205, "f183": 15.8, "f184": 166.9, "f185": 12.8, "f186": 0.8193, "f187": 18.07, "f188": 146.3, "f189": 14.65, "f190": 0.9821, "f191": 91, "f192": 98, "f193": 34, "f194": 51, "f195": 21, "f196": 39, "f197": 62, "f198": 71, "f199": 68, "f200": 96, "f201": 40, "f202": 44, "f203": 82, "f204": 94, "f205": 15, "f206": 21, "f207": 95.05, "f208": 43.07, "f209": 30.7, "f210": 67.83, "f211": 85.15, "f212": 43.07, "f213": 85.15, "f214": 18.32, "f215": 3.893, "f216": 13.81, "f217": 12.74, "f218": 3639, "f219": 9.719, "f220": 8.916, "f221": 0.09556, "f222": 5.743, "f223": 0.005556, "f224": 0.001111, "f225": 0.03556, "f226": 2.471, "f227": 0.7211, "f228": 2.646, "f229": 9.582, "f230": 0.7944, "f231": 3.2, "f232": 13.37, "f233": 41.89, "f234": 0.1233, "f235": 537, "f236": 941.1, "f237": 975.6, "f238": 1333, "f239": 1321, "f240": 1016, "f241": 906.9, "f242": 851.1, "f243": 1068, "f244": 641.7, "f245": 884.3, "f246": 1161, "f247": 671.2, "f248": 900.3, "f249": 1472, "f250": 1092, "f251": 895.7, "f252": 1176, "f253": 775.9, "f254": 598.5, "f255": 1160, "f256": 1010, "f257": 1497, "f258": 1616, "f259": 1053, "f260": 738.6, "f261": 1332, "f262": 843.9, "f263": 1128, "f264": 857.7, "f265": 762.4, "f266": 0.1842, "f267": 0.3089, "f268": 0.75, "f269": 0.525, "f270": 0.02059, "f271": 0.098, "f272": 0.294, "f274": 204.7, "f275": 0.6561, "f276": 289.5, "f277": 1.198, "f278": 2000, "f279": 0.559, "f285": 0.3384, "f286": 0.1286, "f288": 1.205, "f289": 0.8338, "f290": 1.711, "f291": 0.9518, "f292": 1.372}, {"name": "NVIDIA Nemotron Nano 9B V2", "creator": "NVIDIA", "open_weights": true, "f3": 0.6967, "f35": 131072, "f37": 0, "f85": 0.5697, "f89": 0.04866, "f92": 0.2762, "f116": 0.2267, "f147": 0.7238, "f148": 16, "f149": 162.1, "f150": 12.34, "f151": 12.91, "f152": 0.5734, "f155": 1, "f171": 56.44, "f172": 0.4429, "f173": 257.3, "f174": 1.299, "f271": 0.04, "f272": 0.16, "f274": 143.5, "f275": 0.4848, "f276": 218.4, "f277": 0.6882, "f282": 0.2193, "f287": 0.01515}, {"name": "Claude Opus 5.5 (high with fallback)", "creator": "Anthropic", "open_weights": false, "f6": 0.6321, "f7": 1970, "f8": 1951, "f9": 1991, "f10": 1681, "f11": 1672, "f12": 1692, "f13": 1550, "f14": 1535, "f15": 1568, "f16": 0.5889, "f17": 1681, "f18": 570.6, "f19": 0.95, "f20": 0.2, "f21": 5, "f22": 26535647, "f23": 4743185827, "f24": 56144369, "f25": 29608722, "f26": 56.89, "f27": 57.7, "f28": 53.25, "f29": 52.48, "f30": 51.95, "f31": 57.57, "f35": 1000000, "f36": 3.465, "f37": 0.3086, "f38": 0.58, "f44": 40, "f78": 0.5396, "f79": 0.3593, "f81": 0.288, "f82": 1713, "f83": 1692, "f84": 1735, "f89": 0.5556, "f90": 0.556, "f91": 1, "f94": 51.69, "f95": 530.7, "f96": 921, "f97": 596.7, "f98": 1593, "f99": 75.44, "f100": 1123, "f101": 0.5702, "f102": 1.511, "f103": 0.716, "f104": 2.263, "f105": 0.03569, "f106": 1.202, "f107": 0.6313, "f108": 3.465, "f109": 592.2, "f110": 2716, "f111": 28510, "f112": 60070, "f113": 31560, "f114": 470.6, "f116": 0.8267, "f148": 30.98, "f149": 79.98, "f151": 24.73, "f152": 24.73, "f153": 0.15, "f154": 0.8584, "f155": 1, "f156": 42.37, "f157": 0.6483, "f158": 0.6389, "f159": 0.3611, "f165": 79.98, "f166": 62.23, "f167": 100.3, "f168": 66.85, "f169": 87.78, "f171": 62.23, "f172": 9.226, "f173": 100.3, "f174": 103.4, "f175": 113.7, "f176": 101.1, "f177": 108.8, "f178": 108.8, "f179": 30.98, "f180": 79.98, "f181": 24.73, "f182": 24.73, "f183": 24.35, "f184": 80.68, "f185": 18.15, "f186": 18.15, "f187": 20.83, "f188": 62.44, "f189": 12.82, "f190": 12.82, "f266": 2.94, "f267": 4.158, "f268": 12, "f269": 8, "f270": 0.4314, "f271": 4, "f272": 20, "f274": 66.85, "f275": 16.16, "f276": 87.78, "f277": 36.95, "f278": 0, "f279": 0.6042, "f285": 0.5657, "f286": 0.4905, "f288": 24.73, "f289": 9.226, "f290": 103.4, "f291": 16.16, "f292": 36.95}, {"name": "Agnes 2.5 Pro Beta", "creator": "Sapiens AI", "open_weights": false, "f20": 0.01, "f35": 1000000, "f37": 0.1571, "f82": 1336, "f85": 0.9051, "f89": 0.3753, "f116": 0.83, "f148": 22.42, "f149": 118.7, "f150": 16.86, "f151": 18.2, "f152": 1.349, "f154": 0.7543, "f155": 1, "f171": 98.6, "f172": 1.313, "f173": 122.3, "f174": 2.461, "f271": 0.1, "f272": 0.3, "f274": 108.5, "f275": 1.336, "f276": 120.5, "f277": 1.401, "f279": 0.4884, "f283": 0.3567, "f284": 0.6966}, {"name": "Nova 2.0 Pro Preview (low)", "creator": "Amazon", "open_weights": false, "f3": 0.6333, "f35": 256000, "f37": 0, "f82": 444, "f85": 0.7505, "f89": 0.0519, "f92": 0.7959, "f116": 0.6467, "f147": 0.6381, "f148": 28.83, "f149": 118.2, "f150": 16.92, "f151": 24.61, "f152": 7.69, "f154": 0.6272, "f155": 1, "f171": 102, "f172": 3.008, "f173": 161, "f174": 14.56, "f271": 1.25, "f272": 10, "f274": 108.7, "f275": 6.326, "f276": 131.1, "f277": 9.605, "f282": 0.9064, "f284": 0.1948, "f287": 0.1742}, {"name": "Gemini 3.8 Flash (low) AI Studio", "creator": "Google", "open_weights": false, "f6": 0.3651, "f7": 941.3, "f8": 925.8, "f9": 956.8, "f10": 1062, "f11": 1054, "f12": 1071, "f13": 1097, "f14": 1081, "f15": 1113, "f16": 0.3545, "f17": 1062, "f19": 0.9, "f20": 0.075, "f21": 0.75, "f26": 34.1, "f27": 31.09, "f28": 33.58, "f29": 31.03, "f30": 32.91, "f31": 34.84, "f35": 1000000, "f37": 0.04, "f38": 0.315, "f44": 20, "f78": 0.2747, "f79": 0.08064, "f81": 0.186, "f82": 1317, "f83": 1299, "f84": 1334, "f85": 0.9202, "f89": 0.3707, "f90": 0.243, "f91": 1, "f94": 22.35, "f116": 0.8067, "f153": 0.1556, "f154": 0.8451, "f155": 1, "f156": 13.03, "f157": 0.4827, "f158": 0.6811, "f159": 0.3189, "f266": 0.5775, "f267": 0.7797, "f268": 2.25, "f269": 1.5, "f270": 0.1176, "f271": 0.75, "f272": 3.75, "f278": 0, "f279": 0.5498, "f283": 0.332, "f284": 0.8315, "f285": 0.101, "f286": 0.08095}, {"name": "Quasar 438B (max)", "creator": "Multiverse Computing", "open_weights": false, "f6": 0.2386, "f17": 1123, "f20": 0.0099, "f35": 1000000, "f37": 0.09429, "f81": 0.054, "f82": 1190, "f85": 0.7323, "f89": 0.1867, "f90": 0.131, "f116": 0.7633, "f148": 19.28, "f149": 139.5, "f150": 14.34, "f151": 15.7, "f152": 1.357, "f153": 0.09444, "f155": 1, "f171": 77.94, "f172": 1.005, "f173": 232.3, "f174": 1.464, "f271": 0.11, "f272": 0.33, "f274": 119.5, "f275": 1.175, "f276": 185.6, "f277": 1.437, "f279": 0.4815, "f283": 0.2866, "f284": 0.6929, "f285": 0.0101}, {"name": "Nova 2.0 Lite (medium)", "creator": "Amazon", "open_weights": false, "f3": 0.8867, "f35": 1000000, "f37": 0, "f85": 0.7677, "f89": 0.0899, "f92": 0.685, "f116": 0.6, "f147": 0.6635, "f148": 29.07, "f149": 163.6, "f150": 12.22, "f151": 26.01, "f152": 13.79, "f154": 0.6254, "f155": 1, "f171": 125.8, "f172": 6.241, "f173": 257.6, "f174": 34.59, "f271": 0.3, "f272": 2.5, "f274": 148.3, "f275": 7.351, "f276": 202, "f277": 25.47, "f282": 0.7573, "f287": 0.1742}, {"name": "Qwen3 Coder Next", "creator": "Alibaba", "open_weights": true, "f6": 0.01059, "f17": 404.4, "f20": 0.07, "f35": 195100, "f37": 0, "f81": 0.026, "f82": 521.8, "f85": 0.7374, "f89": 0.1015, "f90": 0.043, "f92": 0.3524, "f116": 0.47, "f148": 6.319, "f149": 97.12, "f151": 0.9007, "f152": 0.9007, "f155": 2, "f171": 49.98, "f172": 0.7729, "f173": 128.8, "f174": 2.185, "f271": 0.12, "f272": 0.8, "f274": 79.2, "f275": 0.8399, "f276": 107.5, "f277": 1.292, "f279": 0.3623, "f282": 0.7953, "f283": 0.05361, "f284": 0.382, "f285": 0, "f287": 0.1818}, {"name": "Gemma 4 12B", "creator": "Google", "open_weights": true, "f35": 262144, "f37": 0, "f46": 16.27, "f47": 11.12, "f48": 9.08, "f49": 13.23, "f50": 10.12, "f51": 14.19, "f52": 13.98, "f53": 13.6, "f54": 11.54, "f55": 12.04, "f56": 8.65, "f57": 13.54, "f58": 10.15, "f59": 11.35, "f60": 12.65, "f61": 15.42, "f62": 14.46, "f82": 435.2, "f85": 0.7525, "f89": 0.1566, "f92": 0.7354, "f116": 0.6367, "f148": 23.74, "f149": 115.9, "f150": 17.26, "f151": 19.43, "f152": 2.168, "f154": 0.6965, "f155": 1, "f171": 71.26, "f172": 1.866, "f173": 134.9, "f174": 2.472, "f271": 0.1, "f272": 0.3, "f274": 107.8, "f275": 2.12, "f276": 126.6, "f277": 2.293, "f282": 0.3626, "f284": 0.2734, "f287": 0.1818}, {"name": "Muse Wonder (max)", "creator": "Meta", "open_weights": false, "f6": 0.6809, "f7": 1962, "f8": 1943, "f9": 1982, "f10": 1659, "f11": 1648, "f12": 1669, "f13": 1476, "f14": 1458, "f15": 1493, "f16": 0.6121, "f17": 1659, "f18": 790.2, "f19": 0.95, "f20": 0.2, "f22": 29180076, "f23": 11448083415, "f24": 113389708, "f25": 84209632, "f26": 50.89, "f27": 49.3, "f28": 51.13, "f29": 48.7, "f30": 46.87, "f31": 54.48, "f32": 997, "f33": 977, "f34": 1017, "f35": 1048576, "f36": 6.952, "f37": 0.2829, "f38": 0.48, "f43": 161.8, "f44": 60, "f63": 6.82, "f64": 9.38, "f65": 8.65, "f66": 9.75, "f67": 4.37, "f68": 5.69, "f69": 1325, "f70": 9.48, "f71": 8.11, "f72": 6.62, "f73": 6.15, "f74": 9.35, "f75": 7.53, "f76": 7.38, "f77": 5.82, "f78": 0.4647, "f79": 0.2788, "f80": 70.73, "f81": 0.306, "f82": 1770, "f83": 1747, "f84": 1793, "f86": 0.1, "f89": 0.5009, "f90": 0.39, "f91": 2, "f94": 43.32, "f95": 583.6, "f96": 2245, "f97": 848.4, "f98": 3147, "f99": 53.75, "f100": 2268, "f101": 0.7496, "f102": 3.79, "f103": 1.215, "f104": 5.031, "f105": 0.02533, "f106": 1.921, "f107": 1.172, "f108": 6.952, "f109": 1684, "f110": 5414, "f111": 37480, "f112": 96060, "f113": 58580, "f114": 653.7, "f116": 0.8067, "f148": 40.64, "f149": 146.4, "f150": 13.66, "f151": 37.23, "f152": 23.57, "f153": 0.2222, "f155": 1, "f156": 25.1, "f157": 0.3803, "f158": 0.2087, "f159": 0.7913, "f165": 146.4, "f166": 67.08, "f167": 356.7, "f168": 102.7, "f169": 246.7, "f171": 67.08, "f172": 11.82, "f173": 356.7, "f174": 88.62, "f175": 54.45, "f176": 292.3, "f177": 52.74, "f178": 45.9, "f179": 40.64, "f180": 146.4, "f181": 37.23, "f182": 23.57, "f183": 40.28, "f184": 165.1, "f185": 37.25, "f186": 25.13, "f187": 44.36, "f188": 102.8, "f189": 39.49, "f190": 20.03, "f191": 66, "f192": 89, "f193": 85, "f194": 90, "f195": 80, "f196": 95, "f197": 92, "f198": 100, "f199": 69, "f200": 96, "f201": 54, "f202": 61, "f203": 47, "f204": 64, "f205": 97, "f206": 100, "f207": 77.73, "f208": 87.62, "f209": 90.1, "f210": 95.05, "f211": 90.1, "f212": 55.45, "f213": 55.45, "f214": 100, "f215": 4.753, "f216": 14.25, "f217": 9.081, "f218": 4362, "f219": 12.62, "f220": 19.13, "f221": 0.3263, "f222": 6.866, "f223": 0.006682, "f224": 0.1548, "f225": 0.1759, "f226": 4.033, "f227": 4.937, "f228": 2.394, "f229": 19.79, "f230": 4.429, "f231": 5.02, "f232": 12.48, "f233": 51.66, "f234": 0.08575, "f235": 702.2, "f236": 716.1, "f237": 915.5, "f238": 1296, "f239": 1318, "f240": 1461, "f241": 539.1, "f242": 793.9, "f243": 1471, "f244": 1327, "f245": 1443, "f246": 1108, "f247": 1348, "f248": 1380, "f249": 1568, "f250": 1462, "f251": 765.1, "f252": 1578, "f253": 1206, "f254": 933.8, "f255": 1234, "f256": 1460, "f257": 1698, "f258": 1749, "f259": 1179, "f260": 1013, "f261": 1592, "f262": 933.2, "f263": 1064, "f264": 1083, "f265": 760.6, "f266": 2.94, "f267": 4.158, "f268": 12, "f269": 8, "f270": 0.4314, "f271": 4, "f272": 20, "f274": 102.7, "f275": 18.07, "f276": 246.7, "f277": 32.07, "f278": 2000, "f279": 0.603, "f285": 0.5202, "f286": 0.2571, "f288": 23.57, "f289": 11.82, "f290": 88.62, "f291": 18.07, "f292": 32.07}, {"name": "Gemini 3.5 Flash (High)", "creator": "", "open_weights": false, "f40": 3.447, "f41": 36.06, "f42": 63.72, "f43": 154.9, "f63": 5.69, "f64": 3.37, "f65": 2.01, "f66": 3.67, "f67": 3.02, "f68": 5.82, "f69": 1077, "f70": 3.8, "f71": 3.08, "f72": 5.42, "f73": 4.58, "f74": 3.52, "f75": 5.03, "f76": 8.42, "f77": 7.55, "f80": 26.83, "f117": 98, "f118": 48.99, "f119": 76.09, "f120": 80.28, "f121": 78.18, "f122": 100, "f123": 47.99, "f124": 64.86, "f125": 75.6, "f126": 68, "f127": 63.64, "f128": 84.58, "f129": 74, "f130": 95.1, "f131": 88.24, "f132": 91.88, "f133": 75.52, "f134": 67.75, "f135": 50, "f136": 82, "f137": 69.1, "f138": 96, "f139": 75.2, "f140": 82.58, "f141": 50.5, "f142": 96.08, "f143": 80.77, "f144": 33.33, "f145": 86, "f146": 77.25, "f155": 0, "f280": 76.7, "f281": 152.8}, {"name": "Gemini 3.5 Flash (Minimal)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 2.0 Flash Thinking Experimental (Jan '25)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemma 3 270M", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 2.5 Pro Preview (May' 25)", "creator": "", "open_weights": false, "f43": 145.2, "f46": 16.04, "f47": 9.92, "f48": 6.85, "f49": 13.77, "f50": 10.19, "f51": 14.04, "f52": 14, "f53": 13.67, "f54": 12.04, "f55": 11.96, "f56": 6.23, "f57": 13.54, "f58": 10.81, "f59": 11.62, "f60": 12.62, "f61": 15.46, "f62": 13.81, "f80": 0, "f155": 0, "f280": 62.4, "f281": 145.2}, {"name": "Gemini 1.5 Pro (May '24)", "creator": "", "open_weights": false, "f43": 131.7, "f155": 0}, {"name": "Gemini 2.5 Flash-Lite (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 2.5 Flash (Reasoning)", "creator": "", "open_weights": false, "f43": 142.9, "f46": 14.85, "f47": 8, "f48": 6.08, "f49": 14.23, "f50": 9.38, "f51": 13, "f52": 11.91, "f53": 11.73, "f54": 10.27, "f55": 9.81, "f56": 5.46, "f57": 11.38, "f58": 10.65, "f59": 10.54, "f60": 10.58, "f61": 14.69, "f62": 12.69, "f155": 0, "f280": 41.2, "f281": 140.1}, {"name": "Gemma 3 4B Instruct", "creator": "", "open_weights": false, "f43": 115.9, "f46": 13.88, "f47": 9.15, "f48": 7.81, "f49": 12.31, "f50": 7.92, "f51": 9.77, "f52": 9.96, "f53": 9.13, "f54": 8.73, "f55": 6.92, "f56": 10.73, "f57": 8.31, "f58": 12.62, "f59": 10.85, "f60": 7.38, "f61": 11.96, "f62": 11.69, "f155": 0}, {"name": "Gemini 2.5 Pro", "creator": "", "open_weights": false, "f43": 145.2, "f46": 16.04, "f47": 9.92, "f48": 6.85, "f49": 13.77, "f50": 10.19, "f51": 14.04, "f52": 14, "f53": 13.67, "f54": 12.04, "f55": 11.96, "f56": 6.23, "f57": 13.54, "f58": 10.81, "f59": 11.62, "f60": 12.62, "f61": 15.46, "f62": 13.81, "f80": 0, "f155": 0, "f280": 62.4, "f281": 145.2}, {"name": "Gemini 1.5 Pro (Sep '24)", "creator": "", "open_weights": false, "f43": 131.7, "f155": 0}, {"name": "Gemini 1.0 Ultra", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemma 3 27B Instruct", "creator": "", "open_weights": false, "f43": 130, "f46": 15.54, "f47": 11.62, "f48": 9.69, "f49": 12, "f50": 9.42, "f51": 12.38, "f52": 12.42, "f53": 11.8, "f54": 10.92, "f55": 10.15, "f56": 9.88, "f57": 11.54, "f58": 11.92, "f59": 11.96, "f60": 10.38, "f61": 13.35, "f62": 12.15, "f155": 0}, {"name": "Gemma 3 12B Instruct", "creator": "", "open_weights": false, "f43": 123.5, "f155": 0}, {"name": "Gemini 2.0 Flash-Lite (Preview)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 1.5 Flash (Sep '24)", "creator": "", "open_weights": false, "f43": 129.3, "f155": 0}, {"name": "Gemini 3.5 Flash (Medium)", "creator": "", "open_weights": false, "f155": 0}, {"name": "PALM-2", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 2.5 Flash Preview (Non-reasoning)", "creator": "", "open_weights": false, "f46": 14.85, "f47": 8, "f48": 6.08, "f49": 14.23, "f50": 9.38, "f51": 13, "f52": 11.91, "f53": 11.73, "f54": 10.27, "f55": 9.81, "f56": 5.46, "f57": 11.38, "f58": 10.65, "f59": 10.54, "f60": 10.58, "f61": 14.69, "f62": 12.69, "f155": 0}, {"name": "Gemini 3.1 Flash-Lite", "creator": "", "open_weights": false, "f43": 144.3, "f155": 0}, {"name": "Gemini 2.5 Pro Preview (Mar' 25)", "creator": "", "open_weights": false, "f43": 145.2, "f46": 16.19, "f47": 9.88, "f48": 7.19, "f49": 13.58, "f50": 10.88, "f51": 14.38, "f52": 14.6, "f53": 14.13, "f54": 12.58, "f55": 12.27, "f56": 5.62, "f57": 13.65, "f58": 10.65, "f59": 11.62, "f60": 12.88, "f61": 15.04, "f62": 13.73, "f80": 0, "f155": 0, "f280": 62.4, "f281": 145.2}, {"name": "Gemini 2.5 Flash Preview (Reasoning)", "creator": "", "open_weights": false, "f43": 142.9, "f46": 14.85, "f47": 8, "f48": 6.08, "f49": 14.23, "f50": 9.38, "f51": 13, "f52": 11.91, "f53": 11.73, "f54": 10.27, "f55": 9.81, "f56": 5.46, "f57": 11.38, "f58": 10.65, "f59": 10.54, "f60": 10.58, "f61": 14.69, "f62": 12.69, "f155": 0, "f280": 41.2, "f281": 140.1}, {"name": "Gemini 2.5 Flash (Non-reasoning)", "creator": "", "open_weights": false, "f46": 14.85, "f47": 8, "f48": 6.08, "f49": 14.23, "f50": 9.38, "f51": 13, "f52": 11.91, "f53": 11.73, "f54": 10.27, "f55": 9.81, "f56": 5.46, "f57": 11.38, "f58": 10.65, "f59": 10.54, "f60": 10.58, "f61": 14.69, "f62": 12.69, "f155": 0}, {"name": "Gemini 2.5 Flash-Lite Preview (Sep '25) (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemma 4 E2B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 3.6 Flash (High)", "creator": "", "open_weights": false, "f40": 4.419, "f41": 46.68, "f42": 75.22, "f43": 154.6, "f80": 21.95, "f155": 0, "f281": 151.3}, {"name": "Gemini 3 Flash Preview (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 2.0 Flash-Lite (Feb '25)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 3 Flash Preview (Reasoning)", "creator": "", "open_weights": false, "f43": 151.9, "f80": 17.07, "f155": 0, "f280": 61.1, "f281": 152.3}, {"name": "Gemini 2.5 Flash-Lite Preview (Sep '25) (Reasoning)", "creator": "", "open_weights": false, "f43": 133.8, "f155": 0}, {"name": "Gemini 2.5 Flash Preview (Sep '25) (Non-reasoning)", "creator": "", "open_weights": false, "f46": 14.85, "f47": 8, "f48": 6.08, "f49": 14.23, "f50": 9.38, "f51": 13, "f52": 11.91, "f53": 11.73, "f54": 10.27, "f55": 9.81, "f56": 5.46, "f57": 11.38, "f58": 10.65, "f59": 10.54, "f60": 10.58, "f61": 14.69, "f62": 12.69, "f155": 0}, {"name": "Gemini 1.0 Pro", "creator": "", "open_weights": false, "f43": 117.1, "f155": 0}, {"name": "Gemini 1.5 Flash-8B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 3 Deep Think", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemma 3n E4B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemma 3n E2B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 1.5 Flash (May '24)", "creator": "", "open_weights": false, "f43": 129.3, "f155": 0}, {"name": "Gemma 4 E2B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 3.7 Flash (High)", "creator": "", "open_weights": false, "f40": 2.176, "f41": 65.27, "f42": 82.3, "f43": 158.2, "f80": 36.59, "f155": 0, "f281": 159.1}, {"name": "Gemini 3 Pro Preview (Low)", "creator": "", "open_weights": false, "f46": 17.85, "f47": 14.62, "f48": 13.46, "f49": 9.85, "f50": 10.77, "f51": 15.23, "f52": 16.76, "f53": 15.67, "f54": 14.04, "f55": 14.04, "f56": 9.85, "f57": 15.46, "f58": 10.92, "f59": 13, "f60": 14.38, "f61": 12.58, "f62": 12.12, "f155": 0}, {"name": "Gemini 2.0 Flash (Feb '25)", "creator": "", "open_weights": false, "f43": 134.6, "f155": 0, "f280": 18.9}, {"name": "Gemma 3n E4B Instruct Preview (May '25)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DiffusionGemma 26B A4B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 2.0 Pro Experimental (Feb '25)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 2.5 Flash Preview (Sep '25) (Reasoning)", "creator": "", "open_weights": false, "f43": 142.9, "f46": 14.85, "f47": 8, "f48": 6.08, "f49": 14.23, "f50": 9.38, "f51": 13, "f52": 11.91, "f53": 11.73, "f54": 10.27, "f55": 9.81, "f56": 5.46, "f57": 11.38, "f58": 10.65, "f59": 10.54, "f60": 10.58, "f61": 14.69, "f62": 12.69, "f155": 0, "f280": 41.2, "f281": 140.1}, {"name": "Gemini 3 Pro Preview (High)", "creator": "", "open_weights": false, "f43": 153.1, "f46": 17.85, "f47": 14.62, "f48": 13.46, "f49": 9.85, "f50": 10.77, "f51": 15.23, "f52": 16.76, "f53": 15.67, "f54": 14.04, "f55": 14.04, "f56": 9.85, "f57": 15.46, "f58": 10.92, "f59": 13, "f60": 14.38, "f61": 12.58, "f62": 12.12, "f155": 0, "f280": 76.4, "f281": 153.8}, {"name": "Gemma 3 1B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 3.7 Flash (Low)", "creator": "", "open_weights": false, "f40": 1.832, "f41": 53.76, "f42": 77.88, "f155": 0}, {"name": "Gemini 2.0 Flash Thinking Experimental (Dec '24)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Gemini 3.7 Flash (Medium)", "creator": "", "open_weights": false, "f40": 2.025, "f41": 65.49, "f42": 83.19, "f155": 0}, {"name": "Gemini 2.5 Flash-Lite (Reasoning)", "creator": "", "open_weights": false, "f43": 133.8, "f155": 0}, {"name": "Gemini 2.0 Flash (experimental)", "creator": "", "open_weights": false, "f43": 134.6, "f155": 0, "f280": 18.9}, {"name": "Claude 3.5 Haiku", "creator": "", "open_weights": false, "f43": 127.1, "f155": 0, "f281": 133.3}, {"name": "Claude 3.5 Sonnet (Oct '24)", "creator": "", "open_weights": false, "f43": 133.4, "f46": 15.69, "f47": 11.69, "f48": 9.12, "f49": 12, "f50": 8.46, "f51": 11.77, "f52": 13.07, "f53": 12.22, "f54": 9.81, "f55": 9.46, "f56": 9, "f57": 11.69, "f58": 10.19, "f59": 11.69, "f60": 10.27, "f61": 11.81, "f62": 10.92, "f155": 0, "f281": 138.5}, {"name": "Claude Opus 5 (Xhigh)", "creator": "", "open_weights": false, "f40": 9.072, "f41": 73.15, "f42": 85.84, "f155": 0}, {"name": "Claude 3.7 Sonnet (Reasoning)", "creator": "", "open_weights": false, "f43": 141.1, "f46": 15.85, "f47": 11.23, "f48": 9.65, "f49": 12.46, "f50": 9.04, "f51": 13.15, "f52": 13.71, "f53": 12.89, "f54": 10.81, "f55": 10.73, "f56": 8.96, "f57": 12.54, "f58": 10.04, "f59": 12.5, "f60": 11.5, "f61": 13.31, "f62": 12.69, "f155": 0, "f280": 46.4, "f281": 140.8}, {"name": "Claude Sonnet 5 (Low)", "creator": "", "open_weights": false, "f40": 2.187, "f41": 30.51, "f42": 57.52, "f155": 0}, {"name": "Claude 3 Haiku", "creator": "", "open_weights": false, "f43": 118.8, "f155": 0}, {"name": "Claude Opus 5 (Low)", "creator": "", "open_weights": false, "f40": 1.663, "f41": 58.13, "f42": 84.96, "f155": 0}, {"name": "Claude Sonnet 5 (Max)", "creator": "", "open_weights": false, "f39": 34.1, "f40": 26.4, "f41": 53.85, "f42": 78.76, "f43": 156.9, "f63": 7.46, "f64": 6.75, "f65": 6.58, "f66": 6.58, "f67": 5.85, "f68": 5.96, "f69": 1221, "f70": 6.66, "f71": 6.61, "f72": 6.93, "f73": 6.73, "f74": 6.72, "f75": 6.86, "f76": 6.7, "f77": 5.03, "f80": 29.27, "f117": 98, "f118": 51.06, "f119": 78.26, "f120": 83.1, "f121": 80.68, "f122": 95.5, "f123": 74.74, "f124": 71.74, "f125": 63.86, "f126": 88, "f127": 68.18, "f128": 74.97, "f129": 86, "f130": 95.1, "f131": 92.94, "f132": 90.67, "f133": 61.25, "f134": 53.41, "f135": 55, "f136": 88.69, "f137": 60.65, "f138": 100, "f139": 62.32, "f140": 71.22, "f141": 42.44, "f142": 98.04, "f143": 80.77, "f144": 30, "f145": 76, "f146": 88, "f155": 0, "f280": 60.6, "f281": 155}, {"name": "Claude Opus 4.5 (Reasoning)", "creator": "", "open_weights": false, "f43": 150.2, "f46": 16.73, "f47": 13.15, "f48": 12.54, "f49": 10.38, "f50": 11.85, "f51": 15.35, "f52": 16.76, "f53": 16.09, "f54": 14.65, "f55": 13.62, "f56": 7.77, "f57": 15.04, "f58": 9.42, "f59": 12.88, "f60": 14.27, "f61": 13.12, "f62": 13.62, "f80": 4.878, "f117": 99, "f118": 39.7, "f119": 80.44, "f120": 78.87, "f121": 79.65, "f122": 99.33, "f123": 79.36, "f124": 74.44, "f125": 62.55, "f126": 78, "f127": 59.09, "f128": 81.26, "f129": 68, "f130": 95.1, "f131": 90.39, "f132": 89.46, "f133": 65.67, "f134": 66.45, "f135": 40, "f136": 80.09, "f137": 54.95, "f138": 96, "f139": 65.85, "f140": 63.72, "f141": 45.92, "f142": 98.04, "f143": 78.85, "f144": 20, "f145": 78, "f146": 77.5, "f155": 0, "f280": 62, "f281": 152.7}, {"name": "Claude Sonnet 4.6 (Non-reasoning, High)", "creator": "", "open_weights": false, "f46": 17.46, "f47": 13.77, "f48": 12.58, "f49": 9.88, "f50": 11.31, "f51": 16.15, "f52": 17.29, "f53": 16.64, "f54": 15.35, "f55": 14.65, "f56": 6.08, "f57": 16, "f58": 8.88, "f59": 13.35, "f60": 15.19, "f61": 13.27, "f62": 13.77, "f155": 0}, {"name": "Claude Opus 4.7 (Non-reasoning, High)", "creator": "", "open_weights": false, "f46": 17.81, "f47": 14.62, "f48": 13.23, "f49": 9.46, "f50": 12.77, "f51": 16.42, "f52": 17.76, "f53": 17.04, "f54": 15.92, "f55": 15.35, "f56": 6.88, "f57": 16.85, "f58": 8.46, "f59": 13.15, "f60": 15.81, "f61": 13.46, "f62": 13.46, "f155": 0}, {"name": "Claude Opus 4.5 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 16.73, "f47": 13.15, "f48": 12.54, "f49": 10.38, "f50": 11.85, "f51": 15.35, "f52": 16.76, "f53": 16.09, "f54": 14.65, "f55": 13.62, "f56": 7.77, "f57": 15.04, "f58": 9.42, "f59": 12.88, "f60": 14.27, "f61": 13.12, "f62": 13.62, "f155": 0}, {"name": "Claude Opus 4.6 (Non-reasoning, High)", "creator": "", "open_weights": false, "f46": 17.42, "f47": 14.27, "f48": 13.81, "f49": 9.85, "f50": 11.58, "f51": 15.62, "f52": 17.33, "f53": 16.62, "f54": 14.69, "f55": 14.23, "f56": 8.81, "f57": 15.73, "f58": 9.42, "f59": 13.62, "f60": 14.73, "f61": 13.38, "f62": 14.04, "f155": 0}, {"name": "Claude 4 Opus (Non-reasoning)", "creator": "", "open_weights": false, "f46": 16.23, "f47": 11.62, "f48": 11.12, "f49": 11.92, "f50": 10.58, "f51": 14.12, "f52": 15.4, "f53": 14.31, "f54": 12.96, "f55": 11.81, "f56": 9.85, "f57": 13.04, "f58": 11.46, "f59": 12.31, "f60": 12.27, "f61": 13.23, "f62": 13.73, "f155": 0}, {"name": "Claude Opus 4.6 (Max)", "creator": "", "open_weights": false, "f43": 155.7, "f46": 17.42, "f47": 14.27, "f48": 13.81, "f49": 9.85, "f50": 11.58, "f51": 15.62, "f52": 17.33, "f53": 16.62, "f54": 14.69, "f55": 14.23, "f56": 8.81, "f57": 15.73, "f58": 9.42, "f59": 13.62, "f60": 14.73, "f61": 13.38, "f62": 14.04, "f63": 7.5, "f64": 6.26, "f65": 6.44, "f66": 6.14, "f67": 6.86, "f68": 6.08, "f69": 1210, "f70": 6.09, "f71": 6.8, "f72": 6.83, "f73": 7.34, "f74": 6.41, "f75": 6.75, "f76": 6.45, "f77": 4.26, "f80": 26.83, "f117": 97, "f118": 48.99, "f119": 76.09, "f120": 80.28, "f121": 78.18, "f122": 99.33, "f123": 63.47, "f124": 69.89, "f125": 63.31, "f126": 73, "f127": 63.64, "f128": 83.27, "f129": 80, "f130": 95.1, "f131": 89.32, "f132": 92.17, "f133": 62.82, "f134": 66.48, "f135": 50, "f136": 88.67, "f137": 59.15, "f138": 98, "f139": 66.13, "f140": 65.15, "f141": 48.17, "f142": 98.04, "f143": 82.69, "f144": 33.33, "f145": 84, "f146": 94, "f155": 0, "f280": 67.6, "f281": 156.9}, {"name": "Claude Opus 5 (High)", "creator": "", "open_weights": false, "f40": 6.076, "f41": 72.83, "f42": 87.61, "f155": 0}, {"name": "Claude 3 Opus", "creator": "", "open_weights": false, "f43": 126.9, "f155": 0, "f280": 23.5, "f281": 125.7}, {"name": "Claude Instant", "creator": "", "open_weights": false, "f43": 120.2, "f155": 0}, {"name": "Claude 4 Opus (Reasoning)", "creator": "", "open_weights": false, "f43": 142.6, "f46": 16.23, "f47": 11.62, "f48": 11.12, "f49": 11.92, "f50": 10.58, "f51": 14.12, "f52": 15.4, "f53": 14.31, "f54": 12.96, "f55": 11.81, "f56": 9.85, "f57": 13.04, "f58": 11.46, "f59": 12.31, "f60": 12.27, "f61": 13.23, "f62": 13.73, "f155": 0, "f280": 58.8, "f281": 143.8}, {"name": "Claude 4.5 Sonnet (Reasoning)", "creator": "", "open_weights": false, "f43": 146.8, "f46": 17.15, "f47": 14.19, "f48": 14.15, "f49": 8.92, "f50": 10.42, "f51": 13.92, "f52": 16.67, "f53": 15.42, "f54": 13.73, "f55": 11.69, "f56": 10.65, "f57": 13.31, "f58": 11.08, "f59": 12.85, "f60": 11.92, "f61": 11.35, "f62": 11.77, "f80": 2.439, "f155": 0, "f280": 54.3, "f281": 147.7}, {"name": "Claude 4.5 Sonnet (Non-reasoning)", "creator": "", "open_weights": false, "f46": 17.15, "f47": 14.19, "f48": 14.15, "f49": 8.92, "f50": 10.42, "f51": 13.92, "f52": 16.67, "f53": 15.42, "f54": 13.73, "f55": 11.69, "f56": 10.65, "f57": 13.31, "f58": 11.08, "f59": 12.85, "f60": 11.92, "f61": 11.35, "f62": 11.77, "f155": 0}, {"name": "Claude Opus 4.8 (Max)", "creator": "", "open_weights": false, "f40": 13.22, "f41": 58.97, "f42": 79.28, "f43": 159, "f46": 17.46, "f47": 14.27, "f48": 13.35, "f49": 9.42, "f50": 13.15, "f51": 16.58, "f52": 17.8, "f53": 17.18, "f54": 15.73, "f55": 15.42, "f56": 6.88, "f57": 16.54, "f58": 8.62, "f59": 13.5, "f60": 15.88, "f61": 13.58, "f62": 14.38, "f63": 7.89, "f64": 7.75, "f65": 7.36, "f66": 7.64, "f67": 6.5, "f68": 6.21, "f69": 1268, "f70": 7.69, "f71": 8.06, "f72": 7.12, "f73": 7.52, "f74": 7.71, "f75": 6.96, "f76": 6.52, "f77": 4.4, "f80": 56.1, "f117": 98, "f118": 56.06, "f119": 78.26, "f120": 80.28, "f121": 79.27, "f122": 97.83, "f123": 89.2, "f124": 78.34, "f125": 72.37, "f126": 95, "f127": 68.18, "f128": 81.42, "f129": 82, "f130": 97.06, "f131": 95.32, "f132": 91.21, "f133": 69.92, "f134": 70.42, "f135": 60, "f136": 89.71, "f137": 70.52, "f138": 98, "f139": 74.5, "f140": 74.55, "f141": 47.79, "f142": 98.04, "f143": 78.85, "f144": 40, "f145": 76, "f146": 100, "f155": 0, "f280": 64.8, "f281": 163.2}, {"name": "Claude Sonnet 5 (Xhigh)", "creator": "", "open_weights": false, "f40": 11.89, "f41": 49.67, "f42": 75.22, "f117": 98, "f118": 51.06, "f119": 78.26, "f120": 83.1, "f121": 80.68, "f122": 95.5, "f123": 74.74, "f124": 71.74, "f125": 63.86, "f126": 88, "f127": 68.18, "f128": 74.97, "f129": 86, "f130": 95.1, "f131": 92.94, "f132": 90.67, "f133": 61.25, "f134": 53.41, "f135": 55, "f136": 88.69, "f137": 60.65, "f138": 100, "f139": 62.32, "f140": 71.22, "f141": 42.44, "f142": 98.04, "f143": 80.77, "f144": 30, "f145": 76, "f146": 88, "f155": 0}, {"name": "Claude 2.1", "creator": "", "open_weights": false, "f43": 119.3, "f155": 0}, {"name": "Claude 4.5 Haiku (Reasoning)", "creator": "", "open_weights": false, "f43": 142.2, "f63": 7.99, "f64": 2.48, "f65": 3.01, "f66": 1.64, "f67": 7.56, "f68": 5.6, "f69": 1053, "f70": 1.92, "f71": 4.1, "f72": 6.18, "f73": 7.76, "f74": 2.43, "f75": 5.53, "f76": 5.51, "f77": 4, "f155": 0, "f281": 145}, {"name": "Claude 4 Sonnet (Reasoning)", "creator": "", "open_weights": false, "f43": 141.6, "f46": 16.19, "f47": 12.88, "f48": 11.81, "f49": 11.15, "f50": 10.35, "f51": 13.58, "f52": 15.13, "f53": 14, "f54": 12.62, "f55": 11.38, "f56": 10.42, "f57": 12.73, "f58": 11.85, "f59": 12.69, "f60": 11.58, "f61": 12.65, "f62": 13.08, "f155": 0, "f280": 45.5, "f281": 142.3}, {"name": "Claude 3.5 Sonnet (June '24)", "creator": "", "open_weights": false, "f43": 133.4, "f46": 15.69, "f47": 11.69, "f48": 9.12, "f49": 12, "f50": 8.46, "f51": 11.77, "f52": 13.07, "f53": 12.22, "f54": 9.81, "f55": 9.46, "f56": 9, "f57": 11.69, "f58": 10.19, "f59": 11.69, "f60": 10.27, "f61": 11.81, "f62": 10.92, "f155": 0, "f281": 138.5}, {"name": "Claude 3 Sonnet", "creator": "", "open_weights": false, "f43": 120.8, "f155": 0}, {"name": "Claude Opus 5 (Max)", "creator": "", "open_weights": false, "f39": 46.6, "f40": 11.84, "f41": 73.65, "f42": 88.5, "f43": 163.8, "f63": 8.34, "f64": 10, "f65": 10, "f66": 9.97, "f67": 7.21, "f68": 6.52, "f69": 1365, "f70": 10, "f71": 10, "f72": 7.85, "f73": 7.98, "f74": 9.99, "f75": 7.83, "f76": 5.83, "f77": 3.31, "f80": 73.17, "f155": 0, "f280": 80.6, "f281": 164.9}, {"name": "Claude Sonnet 5 (High)", "creator": "", "open_weights": false, "f40": 7.426, "f41": 48.23, "f42": 79.65, "f155": 0}, {"name": "Claude 4.5 Haiku (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Claude 4.1 Opus (Reasoning)", "creator": "", "open_weights": false, "f43": 144.1, "f80": 2.439, "f155": 0, "f280": 60, "f281": 145.1}, {"name": "Claude Fable 5 (Max, Opus 4.8 Fallback)", "creator": "", "open_weights": false, "f40": 21.63, "f41": 69.72, "f42": 84.07, "f43": 163.1, "f46": 18.04, "f47": 14.54, "f48": 13.35, "f49": 9.73, "f50": 11.23, "f51": 16.12, "f52": 18, "f53": 17.16, "f54": 15.27, "f55": 14.69, "f56": 7.62, "f57": 16, "f58": 9, "f59": 13.62, "f60": 15.15, "f61": 13.35, "f62": 14.04, "f63": 8.2, "f64": 8.63, "f65": 8.56, "f66": 8.67, "f67": 7.07, "f68": 7.28, "f69": 1312, "f70": 8.8, "f71": 9.01, "f72": 7.5, "f73": 7.69, "f74": 9.01, "f75": 7.12, "f76": 6.26, "f77": 3.7, "f80": 90.2, "f117": 99, "f118": 46.92, "f119": 80.44, "f120": 91.55, "f121": 85.99, "f122": 99.33, "f123": 91.36, "f124": 80.54, "f125": 75.77, "f126": 97, "f127": 59.09, "f128": 90.68, "f129": 78, "f130": 95.1, "f131": 95.99, "f132": 92.84, "f133": 77.65, "f134": 78.72, "f135": 45, "f136": 89.65, "f137": 72.03, "f138": 96, "f139": 71.7, "f140": 81.7, "f141": 56.13, "f142": 94.12, "f143": 84.61, "f144": 36.67, "f145": 94, "f146": 100, "f155": 0, "f280": 81.9, "f281": 165.4}, {"name": "Claude 4 Sonnet (Non-reasoning)", "creator": "", "open_weights": false, "f46": 16.19, "f47": 12.88, "f48": 11.81, "f49": 11.15, "f50": 10.35, "f51": 13.58, "f52": 15.13, "f53": 14, "f54": 12.62, "f55": 11.38, "f56": 10.42, "f57": 12.73, "f58": 11.85, "f59": 12.69, "f60": 11.58, "f61": 12.65, "f62": 13.08, "f155": 0}, {"name": "Claude Sonnet 5 (Non-reasoning, High)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Claude 3.7 Sonnet (Non-reasoning)", "creator": "", "open_weights": false, "f46": 15.85, "f47": 11.23, "f48": 9.65, "f49": 12.46, "f50": 9.04, "f51": 13.15, "f52": 13.71, "f53": 12.89, "f54": 10.81, "f55": 10.73, "f56": 8.96, "f57": 12.54, "f58": 10.04, "f59": 12.5, "f60": 11.5, "f61": 13.31, "f62": 12.69, "f155": 0}, {"name": "Claude 2.0", "creator": "", "open_weights": false, "f43": 120.2, "f155": 0}, {"name": "Claude Sonnet 4.6 (Max)", "creator": "", "open_weights": false, "f40": 5.522, "f41": 29.93, "f42": 56.64, "f43": 152.8, "f46": 17.46, "f47": 13.77, "f48": 12.58, "f49": 9.88, "f50": 11.31, "f51": 16.15, "f52": 17.29, "f53": 16.64, "f54": 15.35, "f55": 14.65, "f56": 6.08, "f57": 16, "f58": 8.88, "f59": 13.35, "f60": 15.19, "f61": 13.27, "f62": 13.77, "f63": 7.28, "f64": 6.13, "f65": 6.29, "f66": 5.81, "f67": 6.67, "f68": 4.83, "f69": 1197, "f70": 5.57, "f71": 6.55, "f72": 6.63, "f73": 7.34, "f74": 5.87, "f75": 6.75, "f76": 6.24, "f77": 4.2, "f117": 76, "f118": 42.63, "f119": 78.26, "f120": 80.28, "f121": 79.27, "f122": 99.33, "f123": 92.68, "f124": 77.95, "f125": 63.22, "f126": 90, "f127": 54.55, "f128": 76.1, "f129": 70, "f130": 94.12, "f131": 86.99, "f132": 87.86, "f133": 59.4, "f134": 56.98, "f135": 50, "f136": 84.77, "f137": 62.93, "f138": 100, "f139": 68.9, "f140": 61.65, "f141": 45.08, "f142": 96.08, "f143": 73.08, "f144": 23.33, "f145": 72, "f146": 96, "f155": 0, "f281": 150.7}, {"name": "Claude Opus 4.7 (Max)", "creator": "", "open_weights": false, "f43": 156.7, "f46": 17.81, "f47": 14.62, "f48": 13.23, "f49": 9.46, "f50": 12.77, "f51": 16.42, "f52": 17.76, "f53": 17.04, "f54": 15.92, "f55": 15.35, "f56": 6.88, "f57": 16.85, "f58": 8.46, "f59": 13.15, "f60": 15.81, "f61": 13.46, "f62": 13.46, "f63": 7.34, "f64": 8.41, "f65": 8.38, "f66": 8.64, "f67": 6.06, "f68": 6.19, "f69": 1293, "f70": 8.56, "f71": 7.82, "f72": 7.19, "f73": 6.96, "f74": 8.39, "f75": 7.29, "f76": 6.82, "f77": 4.9, "f80": 31.71, "f117": 98, "f118": 50.66, "f119": 78.26, "f120": 85.92, "f121": 82.09, "f122": 92.33, "f123": 89.52, "f124": 78.26, "f125": 66.74, "f126": 84, "f127": 63.64, "f128": 77.91, "f129": 70, "f130": 98.04, "f131": 92.85, "f132": 91.38, "f133": 65.77, "f134": 61.41, "f135": 45, "f136": 87.19, "f137": 65.5, "f138": 100, "f139": 69.4, "f140": 66.28, "f141": 47.23, "f142": 98.04, "f143": 80.77, "f144": 43.33, "f145": 80, "f146": 98, "f155": 0, "f280": 61.7, "f281": 157.5}, {"name": "Claude Sonnet 5 (Medium)", "creator": "", "open_weights": false, "f40": 4.079, "f41": 39.78, "f42": 64.6, "f155": 0}, {"name": "Claude Sonnet 4.6 (Non-reasoning, Low)", "creator": "", "open_weights": false, "f46": 17.46, "f47": 13.77, "f48": 12.58, "f49": 9.88, "f50": 11.31, "f51": 16.15, "f52": 17.29, "f53": 16.64, "f54": 15.35, "f55": 14.65, "f56": 6.08, "f57": 16, "f58": 8.88, "f59": 13.35, "f60": 15.19, "f61": 13.27, "f62": 13.77, "f155": 0}, {"name": "Claude 4.1 Opus (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Claude Opus 5 (Medium)", "creator": "", "open_weights": false, "f40": 3.29, "f41": 68.9, "f42": 89.38, "f155": 0}, {"name": "GPT-6 Sol (Low)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.2 Codex (Xhigh)", "creator": "", "open_weights": false, "f117": 98, "f118": 49.39, "f119": 86.96, "f120": 80.28, "f121": 83.62, "f122": 95, "f123": 89.02, "f124": 78.2, "f125": 66.45, "f126": 75, "f127": 68.18, "f128": 73.68, "f129": 68, "f130": 95.1, "f131": 88.77, "f132": 87, "f133": 67.05, "f134": 56.03, "f135": 60, "f136": 77.71, "f137": 60.57, "f138": 94, "f139": 74.78, "f140": 63.38, "f141": 45.6, "f142": 100, "f143": 78.85, "f144": 20, "f145": 70, "f146": 70, "f155": 0}, {"name": "GPT-3.5 Turbo", "creator": "", "open_weights": false, "f43": 118.5, "f155": 0, "f280": 8}, {"name": "GPT-5.1 Codex (High)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.6 Luna (Low)", "creator": "", "open_weights": false, "f40": 0.07241, "f41": 1.549, "f42": 4.425, "f155": 0}, {"name": "GPT-5 nano (Minimal)", "creator": "", "open_weights": false, "f155": 0}, {"name": "o3-mini (High)", "creator": "", "open_weights": false, "f155": 0, "f280": 22.8}, {"name": "o1-preview", "creator": "", "open_weights": false, "f43": 141.7, "f155": 0, "f280": 41.7, "f281": 141.2}, {"name": "GPT-5.6 Sol (Low)", "creator": "", "open_weights": false, "f40": 1.074, "f41": 45.35, "f42": 71.68, "f155": 0}, {"name": "GPT-5.5 (Xhigh)", "creator": "", "open_weights": false, "f40": 7.226, "f41": 67.04, "f42": 88.5, "f43": 159.6, "f46": 17.69, "f47": 15.77, "f48": 13.38, "f49": 9.65, "f50": 10.42, "f51": 15.88, "f52": 17.67, "f53": 17.07, "f54": 13.69, "f55": 14.46, "f56": 8.46, "f57": 16.5, "f58": 8.62, "f59": 14.38, "f60": 15.23, "f61": 13.58, "f62": 13.23, "f63": 7.69, "f64": 8.35, "f65": 7.34, "f66": 8.82, "f67": 4.57, "f68": 7.93, "f69": 1295, "f70": 9.49, "f71": 7.45, "f72": 7.08, "f73": 5.85, "f74": 9.07, "f75": 6.26, "f76": 6.83, "f77": 5.72, "f80": 72.5, "f117": 97, "f118": 52.07, "f119": 82.61, "f120": 81.69, "f121": 82.15, "f122": 100, "f123": 88.82, "f124": 81.58, "f125": 70.73, "f126": 99, "f127": 54.55, "f128": 87.36, "f129": 76, "f130": 96.08, "f131": 95.86, "f132": 91.35, "f133": 71.73, "f134": 74.09, "f135": 55, "f136": 89.65, "f137": 66.32, "f138": 98, "f139": 72.55, "f140": 72.32, "f141": 55.9, "f142": 100, "f143": 84.61, "f144": 46.67, "f145": 88, "f146": 100, "f155": 0, "f280": 69, "f281": 159}, {"name": "GPT-5.6 Terra (Medium)", "creator": "", "open_weights": false, "f40": 0.5832, "f41": 35.11, "f42": 60.18, "f155": 0}, {"name": "GPT-5 mini (High)", "creator": "", "open_weights": false, "f43": 145.4, "f80": 12.2, "f155": 0, "f281": 145.4}, {"name": "o3-mini", "creator": "", "open_weights": false, "f43": 140.2, "f80": 0, "f155": 0, "f280": 22.8, "f281": 140.5}, {"name": "GPT-5.4 mini (Medium)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-4.1", "creator": "", "open_weights": false, "f43": 136.7, "f46": 15.42, "f47": 10.54, "f48": 7.31, "f49": 14.08, "f50": 10.19, "f51": 13.77, "f52": 14.02, "f53": 13.67, "f54": 11.54, "f55": 11.23, "f56": 7.96, "f57": 12.73, "f58": 11, "f59": 12.5, "f60": 12.04, "f61": 15.08, "f62": 14.31, "f155": 0, "f280": 27, "f281": 138.7}, {"name": "GPT-5.6 Luna (Max)", "creator": "", "open_weights": false, "f39": 35.9, "f40": 3.028, "f41": 67.19, "f42": 90.27, "f43": 156.5, "f63": 7.01, "f64": 5, "f65": 3.87, "f66": 4.56, "f67": 4.71, "f68": 7.41, "f69": 1146, "f70": 5.72, "f71": 4.41, "f72": 6.97, "f73": 4.92, "f74": 5.71, "f75": 5.22, "f76": 6.33, "f77": 5.56, "f80": 60.98, "f117": 98, "f118": 53.84, "f119": 86.96, "f120": 78.87, "f121": 82.91, "f122": 96.5, "f123": 86.5, "f124": 78.03, "f125": 60.12, "f126": 70, "f127": 68.18, "f128": 72.57, "f129": 80, "f130": 92.16, "f131": 87.2, "f132": 88.65, "f133": 47.82, "f134": 51.2, "f135": 50, "f136": 85.64, "f137": 58.67, "f138": 96, "f139": 69.07, "f140": 64.93, "f141": 47.6, "f142": 100, "f143": 73.08, "f144": 43.33, "f145": 70, "f146": 93.5, "f155": 0, "f280": 46.8, "f281": 154.1}, {"name": "GPT-4o mini Realtime (Dec '24)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5 (High)", "creator": "", "open_weights": false, "f46": 16.92, "f47": 12.19, "f48": 8.69, "f49": 12.81, "f50": 10.96, "f51": 14.31, "f52": 16.2, "f53": 15.22, "f54": 13.35, "f55": 12.77, "f56": 5.92, "f57": 14.85, "f58": 9.38, "f59": 12.15, "f60": 13.73, "f61": 13.96, "f62": 13, "f155": 0, "f280": 56.7}, {"name": "GPT-5.4 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 17.96, "f47": 15.5, "f48": 12.88, "f49": 10.19, "f50": 10.46, "f51": 15.77, "f52": 17.84, "f53": 17.18, "f54": 14.31, "f55": 14.5, "f56": 7.58, "f57": 16.62, "f58": 8.65, "f59": 14.27, "f60": 15.19, "f61": 13.65, "f62": 12.15, "f155": 0}, {"name": "GPT-5.2 (Xhigh)", "creator": "", "open_weights": false, "f43": 153.7, "f46": 18, "f47": 15.54, "f48": 13.04, "f49": 10.54, "f50": 10.19, "f51": 15.35, "f52": 17.4, "f53": 16.64, "f54": 13.54, "f55": 14.04, "f56": 7.31, "f57": 16.15, "f58": 8.88, "f59": 14.5, "f60": 14.81, "f61": 13.65, "f62": 12.31, "f80": 31.7, "f117": 97, "f118": 50.25, "f119": 76.09, "f120": 76.06, "f121": 76.07, "f122": 99, "f123": 88.91, "f124": 78.16, "f125": 61.77, "f126": 92, "f127": 59.09, "f128": 79.81, "f129": 74, "f130": 95.1, "f131": 93.17, "f132": 88.57, "f133": 64.1, "f134": 58.43, "f135": 55, "f136": 83.21, "f137": 54.08, "f138": 96, "f139": 65.7, "f140": 63.2, "f141": 45.58, "f142": 100, "f143": 78.85, "f144": 36.67, "f145": 82, "f146": 84, "f155": 0, "f280": 45.8, "f281": 153.5}, {"name": "GPT-5.1 (High)", "creator": "", "open_weights": false, "f43": 149.8, "f46": 17.46, "f47": 14.42, "f48": 11.69, "f49": 11.58, "f50": 10.5, "f51": 15.35, "f52": 16.91, "f53": 16.29, "f54": 13.92, "f55": 13.92, "f56": 7.15, "f57": 15.85, "f58": 9.15, "f59": 13.19, "f60": 14.69, "f61": 14.31, "f62": 13, "f155": 0, "f280": 53.2, "f281": 148.6}, {"name": "GPT-6 Sol (High)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.4 (Low)", "creator": "", "open_weights": false, "f46": 17.96, "f47": 15.5, "f48": 12.88, "f49": 10.19, "f50": 10.46, "f51": 15.77, "f52": 17.84, "f53": 17.18, "f54": 14.31, "f55": 14.5, "f56": 7.58, "f57": 16.62, "f58": 8.65, "f59": 14.27, "f60": 15.19, "f61": 13.65, "f62": 12.15, "f155": 0}, {"name": "GPT-4o (March 2025, chatgpt-4o-latest)", "creator": "", "open_weights": false, "f46": 14.85, "f47": 8.96, "f48": 6.54, "f49": 14.19, "f50": 10.92, "f51": 14.23, "f52": 14.27, "f53": 13.78, "f54": 12.23, "f55": 12.12, "f56": 7, "f57": 13.12, "f58": 10.77, "f59": 11.23, "f60": 12.5, "f61": 15.42, "f62": 15, "f155": 0}, {"name": "GPT-5.6 Luna (Medium)", "creator": "", "open_weights": false, "f40": 0.2163, "f41": 11.28, "f42": 27.43, "f155": 0}, {"name": "o1", "creator": "", "open_weights": false, "f43": 141.7, "f155": 0, "f280": 41.7, "f281": 141.2}, {"name": "GPT-5.4 Pro (Xhigh)", "creator": "", "open_weights": false, "f43": 159.6, "f80": 58.54, "f155": 0}, {"name": "GPT-4.5 (Preview)", "creator": "", "open_weights": false, "f43": 136.7, "f46": 14.77, "f47": 9.5, "f48": 6.77, "f49": 14.08, "f50": 8.88, "f51": 12.92, "f52": 13.24, "f53": 12.89, "f54": 10.15, "f55": 10.08, "f56": 8.54, "f57": 11.77, "f58": 10.65, "f59": 11.27, "f60": 10.77, "f61": 14.85, "f62": 14.15, "f155": 0, "f280": 34.5, "f281": 137.7}, {"name": "GPT-5 Codex (High)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5 (Medium)", "creator": "", "open_weights": false, "f46": 16.92, "f47": 12.19, "f48": 8.69, "f49": 12.81, "f50": 10.96, "f51": 14.31, "f52": 16.2, "f53": 15.22, "f54": 13.35, "f55": 12.77, "f56": 5.92, "f57": 14.85, "f58": 9.38, "f59": 12.15, "f60": 13.73, "f61": 13.96, "f62": 13, "f155": 0}, {"name": "GPT-4", "creator": "", "open_weights": false, "f43": 125.7, "f155": 0}, {"name": "GPT-5.5 (Medium)", "creator": "", "open_weights": false, "f40": 2.749, "f41": 53.98, "f42": 77.88, "f46": 17.69, "f47": 15.77, "f48": 13.38, "f49": 9.65, "f50": 10.42, "f51": 15.88, "f52": 17.67, "f53": 17.07, "f54": 13.69, "f55": 14.46, "f56": 8.46, "f57": 16.5, "f58": 8.62, "f59": 14.38, "f60": 15.23, "f61": 13.58, "f62": 13.23, "f155": 0}, {"name": "GPT-5.2 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 18, "f47": 15.54, "f48": 13.04, "f49": 10.54, "f50": 10.19, "f51": 15.35, "f52": 17.4, "f53": 16.64, "f54": 13.54, "f55": 14.04, "f56": 7.31, "f57": 16.15, "f58": 8.88, "f59": 14.5, "f60": 14.81, "f61": 13.65, "f62": 12.31, "f155": 0}, {"name": "GPT-5.6 Sol (Medium)", "creator": "", "open_weights": false, "f40": 1.862, "f41": 61.06, "f42": 80.53, "f155": 0}, {"name": "GPT-5.5 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 17.69, "f47": 15.77, "f48": 13.38, "f49": 9.65, "f50": 10.42, "f51": 15.88, "f52": 17.67, "f53": 17.07, "f54": 13.69, "f55": 14.46, "f56": 8.46, "f57": 16.5, "f58": 8.62, "f59": 14.38, "f60": 15.23, "f61": 13.58, "f62": 13.23, "f155": 0}, {"name": "GPT-4.1 nano", "creator": "", "open_weights": false, "f43": 129.5, "f46": 12.65, "f47": 7.62, "f48": 5.19, "f49": 14.15, "f50": 6.27, "f51": 10, "f52": 9.09, "f53": 9.11, "f54": 6.58, "f55": 6.15, "f56": 10.27, "f57": 7.69, "f58": 9.46, "f59": 10.42, "f60": 6.92, "f61": 14.31, "f62": 12.35, "f155": 0, "f281": 125.7}, {"name": "GPT-4 Turbo", "creator": "", "open_weights": false, "f43": 127.3, "f155": 0, "f280": 25.1, "f281": 127.5}, {"name": "GPT-6 Sol (Medium)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.6 Sol (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5 (Low)", "creator": "", "open_weights": false, "f46": 16.92, "f47": 12.19, "f48": 8.69, "f49": 12.81, "f50": 10.96, "f51": 14.31, "f52": 16.2, "f53": 15.22, "f54": 13.35, "f55": 12.77, "f56": 5.92, "f57": 14.85, "f58": 9.38, "f59": 12.15, "f60": 13.73, "f61": 13.96, "f62": 13, "f155": 0}, {"name": "GPT-5.6 Terra (High)", "creator": "", "open_weights": false, "f40": 1.134, "f41": 53.76, "f42": 80.53, "f155": 0}, {"name": "o4-mini (High)", "creator": "", "open_weights": false, "f43": 145.5, "f46": 15.62, "f47": 10.54, "f48": 7.12, "f49": 14.08, "f50": 8.15, "f51": 12.23, "f52": 13.13, "f53": 12.42, "f54": 9.81, "f55": 9.65, "f56": 7.92, "f57": 11.81, "f58": 10.65, "f59": 11.85, "f60": 10.46, "f61": 13.42, "f62": 12.46, "f80": 4.878, "f155": 0, "f280": 38.7, "f281": 144.9}, {"name": "GPT-5.2 (Medium)", "creator": "", "open_weights": false, "f46": 18, "f47": 15.54, "f48": 13.04, "f49": 10.54, "f50": 10.19, "f51": 15.35, "f52": 17.4, "f53": 16.64, "f54": 13.54, "f55": 14.04, "f56": 7.31, "f57": 16.15, "f58": 8.88, "f59": 14.5, "f60": 14.81, "f61": 13.65, "f62": 12.31, "f155": 0}, {"name": "GPT-5.6 Luna (Xhigh)", "creator": "", "open_weights": false, "f40": 1.536, "f41": 56.86, "f42": 78.76, "f117": 98, "f118": 48.84, "f119": 71.74, "f120": 81.69, "f121": 76.71, "f122": 97.5, "f123": 72.94, "f124": 72.9, "f125": 57.45, "f126": 67, "f127": 68.18, "f128": 70.22, "f129": 72, "f130": 91.18, "f131": 86.27, "f132": 88.9, "f133": 51.6, "f134": 49.16, "f135": 45, "f136": 84.66, "f137": 48.93, "f138": 100, "f139": 71.23, "f140": 58.02, "f141": 47.71, "f142": 98.04, "f143": 71.15, "f144": 33.33, "f145": 64, "f146": 95.5, "f155": 0, "f280": 46.8}, {"name": "GPT-5.4 nano (Medium)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.6 Sol (High)", "creator": "", "open_weights": false, "f40": 3.47, "f41": 69.4, "f42": 86.73, "f155": 0}, {"name": "GPT-3.5 Turbo (0613)", "creator": "", "open_weights": false, "f43": 118.5, "f155": 0, "f280": 8}, {"name": "GPT-4o (Aug '24)", "creator": "", "open_weights": false, "f43": 129, "f46": 14.85, "f47": 8.96, "f48": 6.54, "f49": 14.19, "f50": 10.92, "f51": 14.23, "f52": 14.27, "f53": 13.78, "f54": 12.23, "f55": 12.12, "f56": 7, "f57": 13.12, "f58": 10.77, "f59": 11.23, "f60": 12.5, "f61": 15.42, "f62": 15, "f155": 0, "f280": 17.8}, {"name": "GPT-5 nano (Medium)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.6 Terra (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.6 Terra (Xhigh)", "creator": "", "open_weights": false, "f40": 2.127, "f41": 60.18, "f42": 80.53, "f117": 96, "f118": 53.28, "f119": 76.09, "f120": 74.65, "f121": 75.37, "f122": 100, "f123": 87.16, "f124": 77.42, "f125": 59.4, "f126": 77, "f127": 68.18, "f128": 79.91, "f129": 66, "f130": 95.1, "f131": 89.47, "f132": 89.8, "f133": 56.43, "f134": 63.73, "f135": 55, "f136": 84.92, "f137": 56.65, "f138": 98, "f139": 68.02, "f140": 56.48, "f141": 45.1, "f142": 100, "f143": 76.92, "f144": 36.67, "f145": 76, "f146": 98.75, "f155": 0, "f280": 48.9}, {"name": "GPT-4.1 mini", "creator": "", "open_weights": false, "f43": 134.9, "f46": 14.31, "f47": 8.42, "f48": 5.04, "f49": 15.15, "f50": 8.54, "f51": 12.58, "f52": 12.09, "f53": 11.78, "f54": 9.31, "f55": 9.62, "f56": 7.31, "f57": 11.04, "f58": 9.38, "f59": 10.92, "f60": 10.23, "f61": 15.69, "f62": 14.08, "f155": 0, "f281": 134.9}, {"name": "GPT-5.4 (Xhigh)", "creator": "", "open_weights": false, "f40": 5.652, "f41": 51.77, "f42": 77.88, "f43": 157.2, "f46": 17.96, "f47": 15.5, "f48": 12.88, "f49": 10.19, "f50": 10.46, "f51": 15.77, "f52": 17.84, "f53": 17.18, "f54": 14.31, "f55": 14.5, "f56": 7.58, "f57": 16.62, "f58": 8.65, "f59": 14.27, "f60": 15.19, "f61": 13.65, "f62": 12.15, "f63": 7.44, "f64": 7.59, "f65": 6.86, "f66": 7.89, "f67": 4.56, "f68": 7.47, "f69": 1258, "f70": 8.18, "f71": 6.61, "f72": 6.53, "f73": 5.85, "f74": 8.18, "f75": 6.36, "f76": 6.75, "f77": 6.04, "f80": 49, "f117": 98, "f118": 53.84, "f119": 80.44, "f120": 74.65, "f121": 77.54, "f122": 100, "f123": 86.19, "f124": 79.31, "f125": 70.22, "f126": 93, "f127": 68.18, "f128": 82.63, "f129": 68, "f130": 94.12, "f131": 94.15, "f132": 91.47, "f133": 63.43, "f134": 65.9, "f135": 50, "f136": 88.12, "f137": 70, "f138": 98, "f139": 79.02, "f140": 68.42, "f141": 51.75, "f142": 100, "f143": 88.46, "f144": 43.33, "f145": 82, "f146": 98, "f155": 0, "f281": 155.8}, {"name": "GPT-5.6 Luna (High)", "creator": "", "open_weights": false, "f40": 0.7779, "f41": 44.25, "f42": 75.22, "f155": 0}, {"name": "GPT-5.4 mini (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.5 (High)", "creator": "", "open_weights": false, "f40": 5.1, "f41": 64.38, "f42": 90.27, "f46": 17.69, "f47": 15.77, "f48": 13.38, "f49": 9.65, "f50": 10.42, "f51": 15.88, "f52": 17.67, "f53": 17.07, "f54": 13.69, "f55": 14.46, "f56": 8.46, "f57": 16.5, "f58": 8.62, "f59": 14.38, "f60": 15.23, "f61": 13.58, "f62": 13.23, "f117": 98, "f118": 46.77, "f119": 82.61, "f120": 77.47, "f121": 80.04, "f122": 100, "f123": 87.64, "f124": 80.44, "f125": 71.38, "f126": 95, "f127": 63.64, "f128": 87.76, "f129": 78, "f130": 96.08, "f131": 95.19, "f132": 91.68, "f133": 72.12, "f134": 75.28, "f135": 50, "f136": 89.67, "f137": 71.35, "f138": 98, "f139": 68.93, "f140": 73.1, "f141": 53.69, "f142": 100, "f143": 82.69, "f144": 26.67, "f145": 88, "f146": 100, "f155": 0}, {"name": "GPT-4o (ChatGPT)", "creator": "", "open_weights": false, "f43": 129, "f46": 14.85, "f47": 8.96, "f48": 6.54, "f49": 14.19, "f50": 10.92, "f51": 14.23, "f52": 14.27, "f53": 13.78, "f54": 12.23, "f55": 12.12, "f56": 7, "f57": 13.12, "f58": 10.77, "f59": 11.23, "f60": 12.5, "f61": 15.42, "f62": 15, "f155": 0, "f280": 17.8}, {"name": "o1-mini", "creator": "", "open_weights": false, "f43": 135.7, "f155": 0, "f280": 18.1, "f281": 134.9}, {"name": "GPT-4o mini", "creator": "", "open_weights": false, "f43": 126.4, "f155": 0, "f280": 10.7, "f281": 120}, {"name": "GPT-5.4 mini (Xhigh)", "creator": "", "open_weights": false, "f43": 148.8, "f80": 9.756, "f117": 97, "f118": 41.67, "f119": 75.56, "f120": 67.69, "f121": 71.62, "f122": 98.98, "f123": 62.97, "f124": 70.79, "f125": 59.8, "f126": 37, "f127": 50, "f128": 70.95, "f129": 60, "f130": 94.12, "f131": 78.46, "f132": 85.73, "f133": 58.88, "f134": 43.88, "f135": 55, "f136": 71.32, "f137": 54.07, "f138": 88, "f139": 66.63, "f140": 59.63, "f141": 49.38, "f142": 100, "f143": 76.92, "f144": 20, "f145": 70, "f146": 60.37, "f155": 0, "f281": 150.8}, {"name": "GPT-5 mini (Minimal)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.6 Terra (Max)", "creator": "", "open_weights": false, "f39": 41.3, "f40": 4.946, "f41": 69.62, "f42": 88.5, "f43": 160.1, "f63": 6.87, "f64": 6.74, "f65": 5.74, "f66": 6.92, "f67": 4.24, "f68": 7.49, "f69": 1220, "f70": 7.59, "f71": 5.58, "f72": 6.98, "f73": 5.08, "f74": 7.46, "f75": 5.93, "f76": 6.81, "f77": 5.94, "f80": 70.73, "f117": 98, "f118": 67.98, "f119": 80.44, "f120": 76.06, "f121": 78.25, "f122": 93, "f123": 87.67, "f124": 79.31, "f125": 64.62, "f126": 95, "f127": 77.27, "f128": 82.89, "f129": 76, "f130": 95.1, "f131": 94.91, "f132": 91.53, "f133": 57.03, "f134": 69.68, "f135": 70, "f136": 90.63, "f137": 61.43, "f138": 100, "f139": 66.83, "f140": 73.17, "f141": 50.25, "f142": 100, "f143": 86.54, "f144": 56.67, "f145": 86, "f146": 100, "f155": 0, "f280": 48.9, "f281": 161.1}, {"name": "GPT-4o (Nov '24)", "creator": "", "open_weights": false, "f43": 129, "f46": 14.85, "f47": 8.96, "f48": 6.54, "f49": 14.19, "f50": 10.92, "f51": 14.23, "f52": 14.27, "f53": 13.78, "f54": 12.23, "f55": 12.12, "f56": 7, "f57": 13.12, "f58": 10.77, "f59": 11.23, "f60": 12.5, "f61": 15.42, "f62": 15, "f155": 0, "f280": 17.8}, {"name": "GPT-5.4 nano (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5 mini (Medium)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5 (Minimal)", "creator": "", "open_weights": false, "f46": 16.92, "f47": 12.19, "f48": 8.69, "f49": 12.81, "f50": 10.96, "f51": 14.31, "f52": 16.2, "f53": 15.22, "f54": 13.35, "f55": 12.77, "f56": 5.92, "f57": 14.85, "f58": 9.38, "f59": 12.15, "f60": 13.73, "f61": 13.96, "f62": 13, "f155": 0}, {"name": "GPT-6 Sol (Max)", "creator": "", "open_weights": false, "f43": 163.6, "f80": 90, "f155": 0, "f280": 73.1, "f281": 162.6}, {"name": "GPT-5.5 (Low)", "creator": "", "open_weights": false, "f40": 1.2, "f41": 26.99, "f42": 47.79, "f46": 17.69, "f47": 15.77, "f48": 13.38, "f49": 9.65, "f50": 10.42, "f51": 15.88, "f52": 17.67, "f53": 17.07, "f54": 13.69, "f55": 14.46, "f56": 8.46, "f57": 16.5, "f58": 8.62, "f59": 14.38, "f60": 15.23, "f61": 13.58, "f62": 13.23, "f155": 0}, {"name": "o3-pro", "creator": "", "open_weights": false, "f43": 147.4, "f155": 0, "f281": 149.2}, {"name": "GPT-5.6 Terra (Low)", "creator": "", "open_weights": false, "f40": 0.4277, "f41": 24.05, "f42": 44.25, "f155": 0}, {"name": "GPT-5.1 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 17.46, "f47": 14.42, "f48": 11.69, "f49": 11.58, "f50": 10.5, "f51": 15.35, "f52": 16.91, "f53": 16.29, "f54": 13.92, "f55": 13.92, "f56": 7.15, "f57": 15.85, "f58": 9.15, "f59": 13.19, "f60": 14.69, "f61": 14.31, "f62": 13, "f155": 0}, {"name": "GPT-6 Sol (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.4 nano (Xhigh)", "creator": "", "open_weights": false, "f43": 146.1, "f80": 12.2, "f117": 98, "f118": 46.77, "f119": 67.39, "f120": 74.29, "f121": 70.84, "f122": 94.39, "f123": 54.3, "f124": 67.64, "f125": 67.2, "f126": 82.83, "f127": 63.64, "f128": 62.51, "f129": 64, "f130": 95.1, "f131": 90.98, "f132": 87.98, "f133": 66.65, "f134": 39.13, "f135": 50, "f136": 81.1, "f137": 62.75, "f138": 82, "f139": 67.65, "f140": 71.77, "f141": 50.59, "f142": 98.04, "f143": 80.77, "f144": 26.67, "f145": 54, "f146": 97.62, "f155": 0}, {"name": "GPT-5.6 Sol (Max)", "creator": "", "open_weights": false, "f39": 41.7, "f40": 8.386, "f41": 72.67, "f42": 85.84, "f43": 162.7, "f63": 7.51, "f64": 7.14, "f65": 5.89, "f66": 6.82, "f67": 5.45, "f68": 7.68, "f69": 1236, "f70": 7.92, "f71": 6.35, "f72": 7.55, "f73": 5.82, "f74": 8.05, "f75": 5.85, "f76": 5.92, "f77": 4.74, "f80": 82.93, "f117": 98, "f118": 65.61, "f119": 84.78, "f120": 83.1, "f121": 83.94, "f122": 100, "f123": 90.21, "f124": 79.84, "f125": 71.85, "f126": 100, "f127": 81.82, "f128": 87.68, "f129": 82, "f130": 95.1, "f131": 96.2, "f132": 91.69, "f133": 71.52, "f134": 79.05, "f135": 65, "f136": 91.65, "f137": 70.52, "f138": 100, "f139": 75.92, "f140": 69.43, "f141": 49.31, "f142": 100, "f143": 84.61, "f144": 50, "f145": 84, "f146": 100, "f155": 0, "f280": 64.8, "f281": 160.3}, {"name": "GPT-5.6 Sol (Xhigh)", "creator": "", "open_weights": false, "f40": 4.704, "f41": 70.73, "f42": 85.84, "f117": 98, "f118": 56.62, "f119": 84.78, "f120": 78.87, "f121": 81.83, "f122": 100, "f123": 90.06, "f124": 80.3, "f125": 67.39, "f126": 98, "f127": 68.18, "f128": 85.88, "f129": 80, "f130": 94.12, "f131": 95.46, "f132": 91.71, "f133": 65.32, "f134": 77.63, "f135": 55, "f136": 90.17, "f137": 65.6, "f138": 98, "f139": 72.2, "f140": 66.45, "f141": 50.83, "f142": 100, "f143": 82.69, "f144": 46.67, "f145": 80, "f146": 100, "f155": 0, "f280": 64.8}, {"name": "GPT-6 Sol (Xhigh)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.6 Luna (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5 nano (High)", "creator": "", "open_weights": false, "f43": 139.2, "f80": 2.439, "f155": 0, "f281": 140.6}, {"name": "GPT-4o Realtime (Dec '24)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-5.5 Pro (Xhigh)", "creator": "", "open_weights": false, "f43": 162.9, "f80": 78.05, "f155": 0, "f280": 76.9}, {"name": "GPT-5.5 Instant (May 2026)", "creator": "", "open_weights": false, "f43": 142.5, "f80": 2.439, "f155": 0}, {"name": "o1-pro", "creator": "", "open_weights": false, "f155": 0}, {"name": "GPT-4o (May '24)", "creator": "", "open_weights": false, "f43": 129, "f46": 14.85, "f47": 8.96, "f48": 6.54, "f49": 14.19, "f50": 10.92, "f51": 14.23, "f52": 14.27, "f53": 13.78, "f54": 12.23, "f55": 12.12, "f56": 7, "f57": 13.12, "f58": 10.77, "f59": 11.23, "f60": 12.5, "f61": 15.42, "f62": 15, "f155": 0, "f280": 17.8}, {"name": "GPT-5 (ChatGPT)", "creator": "", "open_weights": false, "f43": 150, "f46": 16.92, "f47": 12.19, "f48": 8.69, "f49": 12.81, "f50": 10.96, "f51": 14.31, "f52": 16.2, "f53": 15.22, "f54": 13.35, "f55": 12.77, "f56": 5.92, "f57": 14.85, "f58": 9.38, "f59": 12.15, "f60": 13.73, "f61": 13.96, "f62": 13, "f80": 21.95, "f155": 0, "f280": 56.7, "f281": 149.2}, {"name": "GPT-5.1 Codex mini (High)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Muse Wonder Full (Max)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Muse Spark 1.3 (Max)", "creator": "", "open_weights": false, "f39": 41.6, "f43": 157.2, "f80": 46.34, "f155": 0, "f280": 81.8, "f281": 156.9}, {"name": "Muse Spark 1.2 (Xhigh)", "creator": "", "open_weights": false, "f40": 3.696, "f41": 54.87, "f42": 81.42, "f43": 155, "f155": 0, "f280": 74.5, "f281": 151}, {"name": "Llama 3.1 Instruct 405B", "creator": "", "open_weights": false, "f43": 128.8, "f46": 9.58, "f47": 6.77, "f48": 5.42, "f49": 13.38, "f50": 6.77, "f51": 8.73, "f52": 7.07, "f53": 7.18, "f54": 6.38, "f55": 5.27, "f56": 7.27, "f57": 6.96, "f58": 9.27, "f59": 9.23, "f60": 6.62, "f61": 12.31, "f62": 10.96, "f155": 0, "f280": 23, "f281": 130.7}, {"name": "Llama 3.1 Instruct 70B", "creator": "", "open_weights": false, "f43": 125.9, "f155": 0}, {"name": "Llama 2 Chat 70B", "creator": "", "open_weights": false, "f43": 113.6, "f155": 0}, {"name": "Llama 2 Chat 13B", "creator": "", "open_weights": false, "f43": 105.5, "f155": 0}, {"name": "Llama 3.2 Instruct 3B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Llama 3.1 Instruct 8B", "creator": "", "open_weights": false, "f43": 116.4, "f155": 0}, {"name": "Llama 3.2 Instruct 1B", "creator": "", "open_weights": false, "f46": 3.92, "f47": 2.73, "f48": 2.73, "f49": 6.81, "f50": 2.23, "f51": 2.46, "f52": 2.51, "f53": 2.64, "f54": 2.12, "f55": 1.15, "f56": 8.23, "f57": 1.5, "f58": 6.65, "f59": 4.35, "f60": 1.38, "f61": 4.35, "f62": 4.38, "f155": 0}, {"name": "Llama 3 Instruct 8B", "creator": "", "open_weights": false, "f43": 116.3, "f155": 0}, {"name": "Llama 3.2 Instruct 90B (Vision)", "creator": "", "open_weights": false, "f43": 125.5, "f155": 0}, {"name": "Llama 3 Instruct 70B", "creator": "", "open_weights": false, "f43": 123, "f155": 0}, {"name": "Muse Spark 1.3 (Xhigh)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Muse Spark 1.1 (Xhigh)", "creator": "", "open_weights": false, "f40": 2.361, "f41": 53.32, "f42": 79.65, "f43": 154.1, "f63": 5.88, "f64": 7.56, "f65": 6.67, "f66": 8.06, "f67": 3.87, "f68": 5.05, "f69": 1244, "f70": 7.64, "f71": 6.51, "f72": 6.76, "f73": 5.67, "f74": 7.3, "f75": 6.65, "f76": 8.13, "f77": 6.1, "f117": 82, "f118": 65.05, "f119": 78.26, "f120": 76.06, "f121": 77.16, "f122": 98, "f123": 71.09, "f124": 72.55, "f125": 69.64, "f126": 83, "f127": 81.82, "f128": 74.34, "f129": 78, "f130": 96.08, "f131": 87.14, "f132": 87.5, "f133": 69.4, "f134": 63.03, "f135": 60, "f136": 87.73, "f137": 65.7, "f138": 100, "f139": 69.15, "f140": 74.3, "f141": 46.56, "f142": 100, "f143": 76.92, "f144": 53.33, "f145": 62, "f146": 96, "f155": 0}, {"name": "Muse Spark", "creator": "", "open_weights": false, "f43": 152.1, "f155": 0}, {"name": "Llama 65B", "creator": "", "open_weights": false, "f43": 109.9, "f155": 0}, {"name": "Llama 2 Chat 7B", "creator": "", "open_weights": false, "f43": 98.52, "f155": 0}, {"name": "Kimi K3 (Low)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Kimi K2.6 (Reasoning)", "creator": "", "open_weights": false, "f43": 151, "f46": 18.04, "f47": 14.69, "f48": 13.88, "f49": 10.58, "f50": 9.69, "f51": 15.08, "f52": 17.64, "f53": 16.67, "f54": 14.08, "f55": 12.5, "f56": 12, "f57": 13.46, "f58": 11.96, "f59": 13.5, "f60": 12.65, "f61": 12.31, "f62": 12.46, "f63": 7.77, "f64": 6.01, "f65": 6.23, "f66": 5.61, "f67": 6.42, "f68": 5.22, "f69": 1191, "f70": 5.35, "f71": 6.45, "f72": 6.36, "f73": 7.36, "f74": 5.81, "f75": 6.66, "f76": 6, "f77": 4.39, "f80": 25.64, "f117": 97, "f118": 46.92, "f119": 78.26, "f120": 78.87, "f121": 78.57, "f122": 89.33, "f123": 51.27, "f124": 65.13, "f125": 64.36, "f126": 54, "f127": 59.09, "f128": 75.14, "f129": 70, "f130": 96.08, "f131": 84.28, "f132": 90.03, "f133": 61.63, "f134": 58.09, "f135": 55, "f136": 79.38, "f137": 61.42, "f138": 94, "f139": 66.88, "f140": 67.5, "f141": 46.1, "f142": 98.04, "f143": 75, "f144": 26.67, "f145": 78, "f146": 78.5, "f155": 0, "f281": 150}, {"name": "Kimi K2.6 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 18.04, "f47": 14.69, "f48": 13.88, "f49": 10.58, "f50": 9.69, "f51": 15.08, "f52": 17.64, "f53": 16.67, "f54": 14.08, "f55": 12.5, "f56": 12, "f57": 13.46, "f58": 11.96, "f59": 13.5, "f60": 12.65, "f61": 12.31, "f62": 12.46, "f155": 0}, {"name": "Kimi K2", "creator": "", "open_weights": false, "f43": 140, "f46": 17.46, "f47": 13.65, "f48": 11.58, "f49": 11.31, "f50": 10.54, "f51": 15.12, "f52": 16.96, "f53": 15.89, "f54": 14.04, "f55": 13.15, "f56": 8.42, "f57": 14.69, "f58": 10.73, "f59": 13.46, "f60": 13.73, "f61": 13.58, "f62": 13.81, "f155": 0, "f280": 26.3, "f281": 141.3}, {"name": "Kimi Linear 48B A3B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Kimi K2 0905", "creator": "", "open_weights": false, "f155": 0}, {"name": "Kimi K2.5 (Reasoning)", "creator": "", "open_weights": false, "f43": 148.1, "f46": 17.77, "f47": 14.38, "f48": 14.15, "f49": 10.04, "f50": 9.81, "f51": 14.58, "f52": 16.78, "f53": 15.44, "f54": 13.19, "f55": 12.23, "f56": 11.12, "f57": 13.54, "f58": 11.54, "f59": 13.77, "f60": 12.65, "f61": 12.19, "f62": 12.23, "f155": 0, "f280": 46.8, "f281": 146.9}, {"name": "Kimi K2.5 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 17.77, "f47": 14.38, "f48": 14.15, "f49": 10.04, "f50": 9.81, "f51": 14.58, "f52": 16.78, "f53": 15.44, "f54": 13.19, "f55": 12.23, "f56": 11.12, "f57": 13.54, "f58": 11.54, "f59": 13.77, "f60": 12.65, "f61": 12.19, "f62": 12.23, "f155": 0}, {"name": "Kimi K2 Thinking", "creator": "", "open_weights": false, "f43": 145.8, "f46": 17.46, "f47": 13.65, "f48": 11.58, "f49": 11.31, "f50": 10.54, "f51": 15.12, "f52": 16.96, "f53": 15.89, "f54": 14.04, "f55": 13.15, "f56": 8.42, "f57": 14.69, "f58": 10.73, "f59": 13.46, "f60": 13.73, "f61": 13.58, "f62": 13.81, "f155": 0, "f280": 39.6, "f281": 144.3}, {"name": "Kimi K3 (Max)", "creator": "", "open_weights": false, "f40": 4.655, "f41": 68.51, "f42": 89.38, "f43": 157.9, "f63": 8.54, "f64": 8.85, "f65": 8.76, "f66": 8.9, "f67": 7.16, "f68": 6.7, "f69": 1319, "f70": 8.73, "f71": 9.38, "f72": 7.27, "f73": 7.96, "f74": 8.93, "f75": 7, "f76": 6.25, "f77": 3.78, "f80": 39.02, "f155": 0, "f280": 60.7, "f281": 160.2}, {"name": "Grok 4.20 0309 (Reasoning)", "creator": "", "open_weights": false, "f43": 146.3, "f46": 10.88, "f47": 15.31, "f48": 11.85, "f49": 6.96, "f50": 5.77, "f51": 7.38, "f52": 12.49, "f53": 11.69, "f54": 7.65, "f55": 6.31, "f56": 12.54, "f57": 7.54, "f58": 13.19, "f59": 14.38, "f60": 6.85, "f61": 7.73, "f62": 6.77, "f155": 0, "f280": 60.5, "f281": 144.5}, {"name": "Grok Build 0.1 0616", "creator": "", "open_weights": false, "f117": 66, "f118": 45.81, "f119": 67.39, "f120": 63.38, "f121": 65.39, "f122": 84, "f123": 69.73, "f124": 70.79, "f125": 65.22, "f126": 66, "f127": 59.09, "f128": 72.46, "f129": 70, "f130": 95.1, "f131": 78.43, "f132": 86.62, "f133": 58.38, "f134": 53.38, "f135": 45, "f136": 76.37, "f137": 62.6, "f138": 98, "f139": 72.53, "f140": 67.37, "f141": 42.65, "f142": 100, "f143": 69.23, "f144": 33.33, "f145": 80, "f146": 68.25, "f155": 0}, {"name": "Grok 4.1 Fast (Reasoning)", "creator": "", "open_weights": false, "f46": 16.54, "f47": 10.92, "f48": 7.81, "f49": 14.27, "f50": 9.58, "f51": 13.23, "f52": 14.53, "f53": 13.58, "f54": 10.62, "f55": 11.46, "f56": 7.96, "f57": 12.5, "f58": 11.65, "f59": 11.5, "f60": 11.54, "f61": 14.73, "f62": 13.65, "f155": 0, "f280": 56}, {"name": "Grok 3", "creator": "", "open_weights": false, "f43": 138.2, "f46": 14.23, "f47": 7.88, "f48": 5.19, "f49": 15.12, "f50": 8.58, "f51": 12.96, "f52": 12.24, "f53": 12.04, "f54": 9.58, "f55": 9.19, "f56": 6.5, "f57": 10.88, "f58": 10.5, "f59": 11.27, "f60": 10.15, "f61": 15.58, "f62": 14.38, "f155": 0, "f280": 36.1, "f281": 139.2}, {"name": "Grok 4.6 (Medium)", "creator": "", "open_weights": false, "f40": 3.449, "f41": 67.48, "f42": 84.07, "f155": 0}, {"name": "Grok 2 (Dec '24)", "creator": "", "open_weights": false, "f43": 130.5, "f155": 0, "f280": 22.7}, {"name": "Grok 4 Fast (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Grok 4.1 Fast (Non-reasoning)", "creator": "", "open_weights": false, "f46": 16.54, "f47": 10.92, "f48": 7.81, "f49": 14.27, "f50": 9.58, "f51": 13.23, "f52": 14.53, "f53": 13.58, "f54": 10.62, "f55": 11.46, "f56": 7.96, "f57": 12.5, "f58": 11.65, "f59": 11.5, "f60": 11.54, "f61": 14.73, "f62": 13.65, "f155": 0}, {"name": "Grok-1", "creator": "", "open_weights": false, "f155": 0}, {"name": "Grok 4.20 0309 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 10.88, "f47": 15.31, "f48": 11.85, "f49": 6.96, "f50": 5.77, "f51": 7.38, "f52": 12.49, "f53": 11.69, "f54": 7.65, "f55": 6.31, "f56": 12.54, "f57": 7.54, "f58": 13.19, "f59": 14.38, "f60": 6.85, "f61": 7.73, "f62": 6.77, "f155": 0}, {"name": "Grok 4 Fast (Reasoning)", "creator": "", "open_weights": false, "f43": 144.1, "f155": 0, "f281": 141.6}, {"name": "Grok 4.3 (Medium)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Grok 4", "creator": "", "open_weights": false, "f43": 146.3, "f46": 15.48, "f47": 9.92, "f48": 6.84, "f49": 14.36, "f50": 9.48, "f51": 13.24, "f52": 13.52, "f53": 12.95, "f54": 10.64, "f55": 10.92, "f56": 7.72, "f57": 12.28, "f58": 10.56, "f59": 11.4, "f60": 11.36, "f61": 15.52, "f62": 14.24, "f155": 0, "f280": 60.5, "f281": 144.5}, {"name": "Grok 4.20 0309 v2 (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Grok 4.5 (High)", "creator": "", "open_weights": false, "f40": 2.416, "f41": 53.76, "f42": 77.88, "f43": 154.3, "f80": 24.39, "f117": 99, "f118": 59.8, "f119": 69.56, "f120": 67.61, "f121": 68.59, "f122": 98, "f123": 75.54, "f124": 73.04, "f125": 71.53, "f126": 78, "f127": 72.73, "f128": 82.8, "f129": 72, "f130": 97.06, "f131": 90.82, "f132": 89.24, "f133": 69.22, "f134": 66.39, "f135": 60, "f136": 87.17, "f137": 70.17, "f138": 100, "f139": 73.58, "f140": 73.15, "f141": 43.58, "f142": 100, "f143": 82.69, "f144": 46.67, "f145": 84, "f146": 94, "f155": 0, "f280": 70, "f281": 156.5}, {"name": "Grok 4.3 (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Grok 4.3 (High)", "creator": "", "open_weights": false, "f43": 148.9, "f63": 4.35, "f64": 3.11, "f65": 3.01, "f66": 3.05, "f67": 3.15, "f68": 5.34, "f69": 1065, "f70": 3.13, "f71": 2.16, "f72": 6.59, "f73": 2.98, "f74": 3.31, "f75": 4.88, "f76": 6.72, "f77": 7.04, "f80": 14.63, "f117": 97, "f118": 18.54, "f119": 65.22, "f120": 74.65, "f121": 69.93, "f122": 94, "f123": 28.03, "f124": 55.77, "f125": 62.75, "f126": 63, "f127": 27.27, "f128": 73.58, "f129": 66, "f130": 95.1, "f131": 84.34, "f132": 82.26, "f133": 64.38, "f134": 48.74, "f135": 15, "f136": 70.82, "f137": 57.6, "f138": 98, "f139": 70.6, "f140": 58.42, "f141": 41.25, "f142": 98.04, "f143": 61.54, "f144": 13.33, "f145": 78, "f146": 57.75, "f155": 0}, {"name": "Grok Beta", "creator": "", "open_weights": false, "f155": 0}, {"name": "Grok Code Fast 1", "creator": "", "open_weights": false, "f155": 0}, {"name": "Grok 4.6 (Low)", "creator": "", "open_weights": false, "f40": 1.042, "f41": 41.65, "f42": 69.03, "f155": 0}, {"name": "Grok 4.20 0309 v2 (Reasoning)", "creator": "", "open_weights": false, "f43": 152.2, "f46": 10.88, "f47": 15.31, "f48": 11.85, "f49": 6.96, "f50": 5.77, "f51": 7.38, "f52": 12.49, "f53": 11.69, "f54": 7.65, "f55": 6.31, "f56": 12.54, "f57": 7.54, "f58": 13.19, "f59": 14.38, "f60": 6.85, "f61": 7.73, "f62": 6.77, "f80": 17.07, "f155": 0, "f281": 149.9}, {"name": "Grok 4.6 (High)", "creator": "", "open_weights": false, "f40": 4.385, "f41": 65.19, "f42": 84.96, "f155": 0}, {"name": "Grok 4.6 (Xhigh)", "creator": "", "open_weights": false, "f39": 41.4, "f40": 5.498, "f41": 66.74, "f42": 84.96, "f43": 156.8, "f80": 31.71, "f155": 0, "f280": 75.9, "f281": 159.6}, {"name": "Grok 3 Reasoning Beta", "creator": "", "open_weights": false, "f43": 138.2, "f46": 14.23, "f47": 7.88, "f48": 5.19, "f49": 15.12, "f50": 8.58, "f51": 12.96, "f52": 12.24, "f53": 12.04, "f54": 9.58, "f55": 9.19, "f56": 6.5, "f57": 10.88, "f58": 10.5, "f59": 11.27, "f60": 10.15, "f61": 15.58, "f62": 14.38, "f155": 0, "f280": 36.1, "f281": 139.2}, {"name": "Grok 4.3 (Low)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Grok 3 mini Reasoning (High)", "creator": "", "open_weights": false, "f43": 140.2, "f46": 13.88, "f47": 8.35, "f48": 5.38, "f49": 15.19, "f50": 7.96, "f51": 11.62, "f52": 10.91, "f53": 10.73, "f54": 7.88, "f55": 8.27, "f56": 8.54, "f57": 9.85, "f58": 11.04, "f59": 10.54, "f60": 9.08, "f61": 15.27, "f62": 13.65, "f155": 0, "f281": 138.9}, {"name": "Qwen2.5 Coder Instruct 32B", "creator": "", "open_weights": false, "f43": 119.4, "f155": 0}, {"name": "Qwen3 Coder 480B A35B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3.5 2B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 0.6B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3.5 27B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 4B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen2.5 Instruct 32B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 4B 2507 (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 1.7B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 235B A22B 2507 Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen2.5 Turbo", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3.6 27B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 VL 8B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 30B A3B (Reasoning)", "creator": "", "open_weights": false, "f43": 137.3, "f46": 9.5, "f47": 7.12, "f48": 5.85, "f49": 13.54, "f50": 6.31, "f51": 8.81, "f52": 8.09, "f53": 8.18, "f54": 6.54, "f55": 5, "f56": 9.35, "f57": 6.58, "f58": 10.04, "f59": 8.77, "f60": 6.12, "f61": 11.96, "f62": 11.27, "f155": 0}, {"name": "Qwen3.5 0.8B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen Chat 72B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 235B A22B (Non-reasoning)", "creator": "", "open_weights": false, "f46": 14.62, "f47": 10.92, "f48": 8.69, "f49": 13.23, "f50": 9.73, "f51": 13.62, "f52": 12.76, "f53": 12.53, "f54": 11.19, "f55": 11.12, "f56": 9.58, "f57": 12.19, "f58": 10.73, "f59": 11, "f60": 11.46, "f61": 14.42, "f62": 14.08, "f155": 0}, {"name": "Qwen3 14B (Reasoning)", "creator": "", "open_weights": false, "f43": 138.2, "f155": 0}, {"name": "Qwen3.5 35B A3B (Reasoning)", "creator": "", "open_weights": false, "f43": 142.5, "f155": 0}, {"name": "Qwen3 0.6B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3.5 27B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 VL 30B A3B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 1.7B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 Max (Preview)", "creator": "", "open_weights": false, "f43": 142.3, "f155": 0}, {"name": "Qwen3.5 2B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 30B A3B 2507 (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3.8 Max", "creator": "", "open_weights": false, "f40": 3.729, "f41": 57.46, "f42": 83.19, "f43": 157.4, "f80": 46.34, "f155": 0}, {"name": "Qwen3.6 Max Preview", "creator": "", "open_weights": false, "f43": 149.4, "f155": 0, "f280": 63}, {"name": "Qwen3.7 Max", "creator": "", "open_weights": false, "f43": 154.1, "f63": 5.98, "f64": 3.98, "f65": 2.91, "f66": 4.39, "f67": 2.9, "f68": 5.33, "f69": 1100, "f70": 4.1, "f71": 3.5, "f72": 5.11, "f73": 4.7, "f74": 3.88, "f75": 5.21, "f76": 7.98, "f77": 7.6, "f80": 34.15, "f117": 98, "f118": 43.59, "f119": 69.56, "f120": 78.87, "f121": 74.22, "f122": 96.5, "f123": 71.8, "f124": 71.79, "f125": 74.04, "f126": 59, "f127": 59.09, "f128": 79.74, "f129": 84, "f130": 97.06, "f131": 85.25, "f132": 86.93, "f133": 72, "f134": 58.72, "f135": 45, "f136": 83.34, "f137": 64.08, "f138": 96, "f139": 76.28, "f140": 83.8, "f141": 45.52, "f142": 98.04, "f143": 78.85, "f144": 26.67, "f145": 84, "f146": 74.5, "f155": 0, "f280": 70.4}, {"name": "Qwen3 VL 32B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen2 Instruct 72B", "creator": "", "open_weights": false, "f43": 125.3, "f155": 0, "f281": 122}, {"name": "Qwen3 Max", "creator": "", "open_weights": false, "f43": 142.3, "f155": 0}, {"name": "Qwen3 30B A3B 2507 Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 Max Thinking", "creator": "", "open_weights": false, "f43": 142.3, "f155": 0}, {"name": "QwQ 32B-Preview", "creator": "", "open_weights": false, "f43": 137.5, "f46": 15.92, "f47": 10.62, "f48": 9.12, "f49": 13.12, "f50": 8.38, "f51": 12.58, "f52": 12.8, "f53": 12.09, "f54": 9.54, "f55": 10.35, "f56": 9.85, "f57": 11.96, "f58": 11.35, "f59": 11.5, "f60": 10.58, "f61": 13.92, "f62": 12.73, "f155": 0}, {"name": "Qwen3.6 27B (Reasoning)", "creator": "", "open_weights": false, "f43": 146.3, "f63": 7.67, "f64": 1.6, "f65": 1.16, "f66": 1.51, "f67": 4.97, "f68": 6.66, "f69": 1015, "f70": 1.71, "f71": 2.58, "f72": 5.22, "f73": 5.98, "f74": 1.84, "f75": 4.79, "f76": 6.83, "f77": 6.47, "f117": 93, "f118": 39.29, "f119": 71.74, "f120": 71.83, "f121": 71.78, "f122": 77.17, "f123": 70.39, "f124": 70.43, "f125": 53.23, "f126": 52, "f127": 54.55, "f128": 63.3, "f129": 62, "f130": 92.16, "f131": 79.87, "f132": 82.32, "f133": 49.43, "f134": 42.75, "f135": 40, "f136": 70.28, "f137": 50.73, "f138": 100, "f139": 60.13, "f140": 52.62, "f141": 42.85, "f142": 98.04, "f143": 65.39, "f144": 23.33, "f145": 70, "f146": 53.75, "f155": 0}, {"name": "Qwen3 8B (Reasoning)", "creator": "", "open_weights": false, "f43": 136.1, "f46": 12.04, "f47": 8.04, "f48": 7.04, "f49": 12.38, "f50": 6.38, "f51": 8.92, "f52": 8.38, "f53": 8.07, "f54": 6.81, "f55": 5.73, "f56": 10.35, "f57": 7.15, "f58": 11.15, "f59": 9.04, "f60": 6.31, "f61": 11.77, "f62": 9.92, "f155": 0}, {"name": "Qwen3.5 0.8B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 VL 235B A22B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 32B (Reasoning)", "creator": "", "open_weights": false, "f43": 138.4, "f46": 11.54, "f47": 9.27, "f48": 6.85, "f49": 13.62, "f50": 8.15, "f51": 10.77, "f52": 10.16, "f53": 10.02, "f54": 8.65, "f55": 7.58, "f56": 9.15, "f57": 9.23, "f58": 10.08, "f59": 10.27, "f60": 8.46, "f61": 13.23, "f62": 12.08, "f155": 0}, {"name": "Qwen3 4B 2507 Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 8B (Non-reasoning)", "creator": "", "open_weights": false, "f46": 12.04, "f47": 8.04, "f48": 7.04, "f49": 12.38, "f50": 6.38, "f51": 8.92, "f52": 8.38, "f53": 8.07, "f54": 6.81, "f55": 5.73, "f56": 10.35, "f57": 7.15, "f58": 11.15, "f59": 9.04, "f60": 6.31, "f61": 11.77, "f62": 9.92, "f155": 0}, {"name": "Qwen2.5 Instruct 72B", "creator": "", "open_weights": false, "f43": 129, "f46": 11.15, "f47": 7, "f48": 5.15, "f49": 13.96, "f50": 5.69, "f51": 8.58, "f52": 6.93, "f53": 7.13, "f54": 5.31, "f55": 4.92, "f56": 8.08, "f57": 7, "f58": 8.62, "f59": 9.23, "f60": 5.92, "f61": 12.42, "f62": 10.46, "f155": 0, "f281": 126.4}, {"name": "Qwen2.5 Max", "creator": "", "open_weights": false, "f43": 132.5, "f155": 0}, {"name": "Qwen3 235B A22B (Reasoning)", "creator": "", "open_weights": false, "f43": 139.2, "f46": 14.62, "f47": 10.92, "f48": 8.69, "f49": 13.23, "f50": 9.73, "f51": 13.62, "f52": 12.76, "f53": 12.53, "f54": 11.19, "f55": 11.12, "f56": 9.58, "f57": 12.19, "f58": 10.73, "f59": 11, "f60": 11.46, "f61": 14.42, "f62": 14.08, "f155": 0, "f280": 31, "f281": 140.4}, {"name": "Qwen3 32B (Non-reasoning)", "creator": "", "open_weights": false, "f46": 11.54, "f47": 9.27, "f48": 6.85, "f49": 13.62, "f50": 8.15, "f51": 10.77, "f52": 10.16, "f53": 10.02, "f54": 8.65, "f55": 7.58, "f56": 9.15, "f57": 9.23, "f58": 10.08, "f59": 10.27, "f60": 8.46, "f61": 13.23, "f62": 12.08, "f155": 0}, {"name": "Qwen Chat 14B", "creator": "", "open_weights": false, "f43": 112.8, "f155": 0}, {"name": "Qwen3 Next 80B A3B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 Max Thinking (Preview)", "creator": "", "open_weights": false, "f43": 142.3, "f155": 0}, {"name": "Qwen3 VL 30B A3B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "QwQ 32B", "creator": "", "open_weights": false, "f43": 137.5, "f46": 15.92, "f47": 10.62, "f48": 9.12, "f49": 13.12, "f50": 8.38, "f51": 12.58, "f52": 12.8, "f53": 12.09, "f54": 9.54, "f55": 10.35, "f56": 9.85, "f57": 11.96, "f58": 11.35, "f59": 11.5, "f60": 10.58, "f61": 13.92, "f62": 12.73, "f155": 0}, {"name": "Qwen1.5 Chat 110B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 VL 32B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 VL 235B A22B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 Coder 30B A3B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 VL 8B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen2.5 Coder Instruct 7B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 4B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 14B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3.5 35B A3B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 30B A3B (Non-reasoning)", "creator": "", "open_weights": false, "f46": 9.5, "f47": 7.12, "f48": 5.85, "f49": 13.54, "f50": 6.31, "f51": 8.81, "f52": 8.09, "f53": 8.18, "f54": 6.54, "f55": 5, "f56": 9.35, "f57": 6.58, "f58": 10.04, "f59": 8.77, "f60": 6.12, "f61": 11.96, "f62": 11.27, "f155": 0}, {"name": "Qwen3.6 Plus", "creator": "", "open_weights": false, "f43": 147.3, "f117": 97, "f118": 41.36, "f119": 76.09, "f120": 80.28, "f121": 78.18, "f122": 90.5, "f123": 67.04, "f124": 69.91, "f125": 58.34, "f126": 62, "f127": 59.09, "f128": 74.99, "f129": 70, "f130": 93.14, "f131": 83.72, "f132": 82.76, "f133": 60.62, "f134": 52.47, "f135": 45, "f136": 75.83, "f137": 51.57, "f138": 98, "f139": 56.87, "f140": 64.32, "f141": 44.65, "f142": 98.04, "f143": 67.31, "f144": 20, "f145": 82, "f146": 68, "f155": 0}, {"name": "Qwen3 VL 4B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 235B A22B 2507 (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Qwen3 VL 4B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V3.2 Exp (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V3.1 Terminus (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek R1 (Jan '25)", "creator": "", "open_weights": false, "f43": 141.2, "f46": 16.58, "f47": 11.77, "f48": 9.73, "f49": 12.04, "f50": 9.62, "f51": 13.23, "f52": 14.71, "f53": 13.8, "f54": 10.73, "f55": 11.62, "f56": 8.15, "f57": 13, "f58": 9.46, "f59": 11.77, "f60": 11.81, "f61": 12.88, "f62": 12.58, "f155": 0, "f280": 30.9, "f281": 142.8}, {"name": "DeepSeek R1 Distill Llama 8B", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V3.1 (Reasoning)", "creator": "", "open_weights": false, "f43": 139.8, "f155": 0, "f280": 40}, {"name": "DeepSeek-V2-Chat", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V3 (Dec '24)", "creator": "", "open_weights": false, "f43": 135.9, "f155": 0, "f280": 18.9, "f281": 139.1}, {"name": "DeepSeek R1 Distill Qwen 1.5B", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek R1 Distill Llama 70B", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V3.2 Speciale", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V4 Pro 0424 (High)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek R1 0528 Qwen3 8B", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V3.2 (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V4 Pro 0424 (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V4.1 Flash (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V3 0324", "creator": "", "open_weights": false, "f46": 15.73, "f47": 10.46, "f48": 9.27, "f49": 10.69, "f50": 9.27, "f51": 11.73, "f52": 13.62, "f53": 12.69, "f54": 10.46, "f55": 10, "f56": 8.12, "f57": 11.12, "f58": 9.5, "f59": 10.08, "f60": 10.38, "f61": 11.77, "f62": 10.85, "f155": 0, "f280": 27.2}, {"name": "DeepSeek LLM 67B Chat (V1)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V4 Flash 0420 (High)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek-V2.5", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek-Coder-V2", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek R1 0528 (May '25)", "creator": "", "open_weights": false, "f43": 141.2, "f46": 16.58, "f47": 11.77, "f48": 9.73, "f49": 12.04, "f50": 9.62, "f51": 13.23, "f52": 14.71, "f53": 13.8, "f54": 10.73, "f55": 11.62, "f56": 8.15, "f57": 13, "f58": 9.46, "f59": 11.77, "f60": 11.81, "f61": 12.88, "f62": 12.58, "f155": 0, "f280": 40.8, "f281": 142.8}, {"name": "DeepSeek V4 Flash 0420 (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V3.2 Exp (Reasoning)", "creator": "", "open_weights": false, "f43": 146.1, "f155": 0, "f281": 145.7}, {"name": "DeepSeek R1 Distill Qwen 14B", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek-V2.5 (Dec '24)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V4 Pro 0424 (Max)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek Coder V2 Lite Instruct", "creator": "", "open_weights": false, "f43": 108.6, "f155": 0}, {"name": "DeepSeek V3.2 (Reasoning)", "creator": "", "open_weights": false, "f43": 146.1, "f155": 0, "f281": 145.7}, {"name": "DeepSeek V4 Flash 0420 (Max)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V4.1 Flash (Max)", "creator": "", "open_weights": false, "f43": 156, "f80": 26.83, "f155": 0, "f280": 66.7, "f281": 151.8}, {"name": "DeepSeek R1 Distill Qwen 32B", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V3.1 Terminus (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V3.1 (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepSeek V4 Flash 0731 (Max)", "creator": "", "open_weights": false, "f40": 0.1002, "f41": 53.32, "f42": 80.53, "f43": 154.8, "f46": 16.54, "f47": 12.12, "f48": 11.38, "f49": 11.69, "f50": 11.54, "f51": 14.65, "f52": 16.07, "f53": 15.18, "f54": 13.88, "f55": 12.73, "f56": 8.5, "f57": 14.04, "f58": 10.73, "f59": 11.88, "f60": 13.31, "f61": 13.58, "f62": 13.88, "f80": 24.39, "f117": 98, "f118": 37.63, "f119": 65.22, "f120": 73.24, "f121": 69.23, "f122": 89.5, "f123": 59.91, "f124": 68.02, "f125": 63.14, "f126": 37, "f127": 54.55, "f128": 70.12, "f129": 64, "f130": 97.06, "f131": 79.65, "f132": 86.53, "f133": 62.38, "f134": 46.87, "f135": 35, "f136": 70.58, "f137": 54.05, "f138": 96, "f139": 67.27, "f140": 68.85, "f141": 46.12, "f142": 98.04, "f143": 73.08, "f144": 23.33, "f145": 74, "f146": 49.25, "f155": 0, "f280": 61.1, "f281": 149.6}, {"name": "GLM-4.5V (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GLM-5-Turbo", "creator": "", "open_weights": false, "f46": 16.92, "f47": 12.77, "f48": 12.54, "f49": 10.69, "f50": 12.27, "f51": 15.15, "f52": 16.71, "f53": 15.69, "f54": 14.77, "f55": 13.73, "f56": 8.12, "f57": 14.62, "f58": 9.73, "f59": 12.15, "f60": 14.04, "f61": 13.54, "f62": 13.85, "f155": 0}, {"name": "GLM-4.5 (Reasoning)", "creator": "", "open_weights": false, "f46": 16.15, "f47": 11.65, "f48": 9.46, "f49": 13.65, "f50": 9.77, "f51": 13.77, "f52": 15, "f53": 14.04, "f54": 11.5, "f55": 11.65, "f56": 9.42, "f57": 13.35, "f58": 11.42, "f59": 11.96, "f60": 12.27, "f61": 14.08, "f62": 13.08, "f155": 0}, {"name": "GLM 5V Turbo (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GLM-4.7-Flash (Reasoning)", "creator": "", "open_weights": false, "f46": 15.88, "f47": 12.52, "f48": 12.04, "f49": 11.2, "f50": 8, "f51": 10.72, "f52": 12.55, "f53": 11.5, "f54": 9.8, "f55": 8.84, "f56": 11.44, "f57": 9.96, "f58": 13, "f59": 10.12, "f60": 8.72, "f61": 11.2, "f62": 9.36, "f155": 0}, {"name": "GLM-4.5V (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GLM-5 (Reasoning)", "creator": "", "open_weights": false, "f43": 145.8, "f46": 16.92, "f47": 12.77, "f48": 12.54, "f49": 10.69, "f50": 12.27, "f51": 15.15, "f52": 16.71, "f53": 15.69, "f54": 14.77, "f55": 13.73, "f56": 8.12, "f57": 14.62, "f58": 9.73, "f59": 12.15, "f60": 14.04, "f61": 13.54, "f62": 13.85, "f155": 0, "f280": 53.2, "f281": 148.7}, {"name": "GLM-4.6V (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GLM-5.1 (Reasoning)", "creator": "", "open_weights": false, "f43": 149.8, "f46": 17.04, "f47": 13.27, "f48": 13.58, "f49": 9.54, "f50": 11.38, "f51": 14.42, "f52": 17.04, "f53": 16.09, "f54": 14.69, "f55": 12.5, "f56": 9.92, "f57": 14, "f58": 10.46, "f59": 12.88, "f60": 13.23, "f61": 12.35, "f62": 12.62, "f155": 0, "f280": 55.1, "f281": 149.8}, {"name": "GLM-4.5-Air", "creator": "", "open_weights": false, "f155": 0}, {"name": "GLM-4.6 (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GLM-4.7 (Reasoning)", "creator": "", "open_weights": false, "f43": 143.6, "f46": 17.08, "f47": 13.15, "f48": 11.38, "f49": 11.46, "f50": 10.81, "f51": 13.96, "f52": 15.49, "f53": 14.47, "f54": 13.27, "f55": 12.23, "f56": 9.08, "f57": 13.85, "f58": 11.42, "f59": 12.58, "f60": 12.54, "f61": 13.15, "f62": 11.88, "f155": 0, "f280": 47.7}, {"name": "GLM-4.7 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 17.08, "f47": 13.15, "f48": 11.38, "f49": 11.46, "f50": 10.81, "f51": 13.96, "f52": 15.49, "f53": 14.47, "f54": 13.27, "f55": 12.23, "f56": 9.08, "f57": 13.85, "f58": 11.42, "f59": 12.58, "f60": 12.54, "f61": 13.15, "f62": 11.88, "f155": 0}, {"name": "GLM-5.1 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 17.04, "f47": 13.27, "f48": 13.58, "f49": 9.54, "f50": 11.38, "f51": 14.42, "f52": 17.04, "f53": 16.09, "f54": 14.69, "f55": 12.5, "f56": 9.92, "f57": 14, "f58": 10.46, "f59": 12.88, "f60": 13.23, "f61": 12.35, "f62": 12.62, "f155": 0}, {"name": "GLM-4.6 (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GLM-4.7-Flash (Non-reasoning)", "creator": "", "open_weights": false, "f46": 15.88, "f47": 12.52, "f48": 12.04, "f49": 11.2, "f50": 8, "f51": 10.72, "f52": 12.55, "f53": 11.5, "f54": 9.8, "f55": 8.84, "f56": 11.44, "f57": 9.96, "f58": 13, "f59": 10.12, "f60": 8.72, "f61": 11.2, "f62": 9.36, "f155": 0}, {"name": "GLM-4.6V (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "GLM-5.2 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 17.54, "f47": 14.04, "f48": 13.69, "f49": 10.15, "f50": 12.12, "f51": 15.73, "f52": 17.29, "f53": 16.36, "f54": 15.42, "f55": 14.31, "f56": 8.54, "f57": 15.54, "f58": 10.31, "f59": 12.85, "f60": 14.73, "f61": 13.12, "f62": 13.23, "f155": 0}, {"name": "GLM-5 (Non-reasoning)", "creator": "", "open_weights": false, "f46": 16.92, "f47": 12.77, "f48": 12.54, "f49": 10.69, "f50": 12.27, "f51": 15.15, "f52": 16.71, "f53": 15.69, "f54": 14.77, "f55": 13.73, "f56": 8.12, "f57": 14.62, "f58": 9.73, "f59": 12.15, "f60": 14.04, "f61": 13.54, "f62": 13.85, "f155": 0}, {"name": "GLM-5.2 (Max)", "creator": "", "open_weights": false, "f40": 3.92, "f41": 43.78, "f42": 76.99, "f43": 152, "f46": 17.54, "f47": 14.04, "f48": 13.69, "f49": 10.15, "f50": 12.12, "f51": 15.73, "f52": 17.29, "f53": 16.36, "f54": 15.42, "f55": 14.31, "f56": 8.54, "f57": 15.54, "f58": 10.31, "f59": 12.85, "f60": 14.73, "f61": 13.12, "f62": 13.23, "f63": 7.48, "f64": 6.34, "f65": 6.33, "f66": 6.39, "f67": 6.03, "f68": 5.67, "f69": 1208, "f70": 6.08, "f71": 6.55, "f72": 6.67, "f73": 7.07, "f74": 6.25, "f75": 6.61, "f76": 6.78, "f77": 5.07, "f80": 29.27, "f117": 98, "f118": 51.92, "f119": 80.44, "f120": 78.87, "f121": 79.65, "f122": 94, "f123": 79.28, "f124": 73.74, "f125": 62.29, "f126": 76, "f127": 59.09, "f128": 76.24, "f129": 80, "f130": 96.08, "f131": 89.78, "f132": 89.05, "f133": 62.25, "f134": 60.73, "f135": 50, "f136": 78.62, "f137": 55.67, "f138": 94, "f139": 62.88, "f140": 68.37, "f141": 45.87, "f142": 96.08, "f143": 75, "f144": 46.67, "f145": 74, "f146": 65.5, "f155": 0, "f280": 58.8, "f281": 153}, {"name": "MiMo-V2.5-Pro (Reasoning)", "creator": "", "open_weights": false, "f63": 6.97, "f64": 6.06, "f65": 6.2, "f66": 6.24, "f67": 5.97, "f68": 5.58, "f69": 1198, "f70": 5.98, "f71": 6.15, "f72": 6.62, "f73": 6.74, "f74": 5.92, "f75": 6.67, "f76": 6.96, "f77": 5.33, "f155": 0}, {"name": "MiMo-V2-Flash (Feb 2026)", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiMo-V2.5", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiMo-V2-Omni-0327", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiMo-V2.5-Pro (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiMo-V2-Pro", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiMo-V2-Flash (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiMo-V2-Omni", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiMo-V2-Flash (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Ling-1T", "creator": "", "open_weights": false, "f155": 0}, {"name": "Ling-2.6-1T", "creator": "", "open_weights": false, "f155": 0}, {"name": "Ling-mini-2.0", "creator": "", "open_weights": false, "f155": 0}, {"name": "Ling-3.0-flash-VL", "creator": "", "open_weights": false, "f155": 0}, {"name": "Ring-flash-2.0", "creator": "", "open_weights": false, "f155": 0}, {"name": "Ling-3.0-flash-Fin", "creator": "", "open_weights": false, "f155": 0}, {"name": "Ling-flash-2.0", "creator": "", "open_weights": false, "f155": 0}, {"name": "Ling 2.6 Flash", "creator": "", "open_weights": false, "f155": 0}, {"name": "Ring-1T", "creator": "", "open_weights": false, "f155": 0}, {"name": "Ling 3.0 Flash", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiniMax-M2.5", "creator": "", "open_weights": false, "f43": 146.6, "f155": 0}, {"name": "MiniMax-M2.1", "creator": "", "open_weights": false, "f155": 0, "f280": 34.7}, {"name": "MiniMax M1 40k", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiniMax-M2.7", "creator": "", "open_weights": false, "f43": 145.8, "f155": 0, "f281": 145.9}, {"name": "MiniMax M1 80k", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiniMax-M2", "creator": "", "open_weights": false, "f155": 0, "f280": 25}, {"name": "Step 3.5 Flash 2603", "creator": "", "open_weights": false, "f155": 0}, {"name": "Step 3.7 Flash", "creator": "", "open_weights": false, "f155": 0}, {"name": "Step3 VL 10B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Step 3.5 Flash", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mistral Large 4 Preview", "creator": "", "open_weights": false, "f43": 150.5, "f80": 26.83, "f155": 0, "f281": 146.3}, {"name": "Mistral Medium 3.1", "creator": "", "open_weights": false, "f155": 0}, {"name": "Devstral 2", "creator": "", "open_weights": false, "f155": 0}, {"name": "Magistral Small 1", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mistral Large 2 (Jul '24)", "creator": "", "open_weights": false, "f43": 128.6, "f46": 11.62, "f47": 7.69, "f48": 5.92, "f49": 13.38, "f50": 6.38, "f51": 9.46, "f52": 7.58, "f53": 7.6, "f54": 6.58, "f55": 6.15, "f56": 9.08, "f57": 7.88, "f58": 9.23, "f59": 9.15, "f60": 7.08, "f61": 12.92, "f62": 11.54, "f155": 0, "f280": 22.5}, {"name": "Mistral Medium", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mistral 7B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mistral Small 3.1", "creator": "", "open_weights": false, "f43": 127.5, "f46": 10.23, "f47": 6.96, "f48": 5.69, "f49": 12.88, "f50": 4.88, "f51": 8.12, "f52": 6.38, "f53": 6.62, "f54": 5, "f55": 4.23, "f56": 10.5, "f57": 6.27, "f58": 8.15, "f59": 8.96, "f60": 5.35, "f61": 12.12, "f62": 10.92, "f155": 0}, {"name": "Mistral Small (Feb '24)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mixtral 8x7B Instruct", "creator": "", "open_weights": false, "f43": 118.4, "f155": 0}, {"name": "Mistral Small 3.2", "creator": "", "open_weights": false, "f46": 15.54, "f47": 11.46, "f48": 10.23, "f49": 12.08, "f50": 8.54, "f51": 11.88, "f52": 12.2, "f53": 11.58, "f54": 9.77, "f55": 9.38, "f56": 11.08, "f57": 11.08, "f58": 11.58, "f59": 11.35, "f60": 9.88, "f61": 12.77, "f62": 12.27, "f155": 0}, {"name": "Mistral Large 3", "creator": "", "open_weights": false, "f155": 0, "f280": 20.4}, {"name": "Mistral Large 2 (Nov '24)", "creator": "", "open_weights": false, "f43": 128.6, "f46": 11.62, "f47": 7.69, "f48": 5.92, "f49": 13.38, "f50": 6.38, "f51": 9.46, "f52": 7.58, "f53": 7.6, "f54": 6.58, "f55": 6.15, "f56": 9.08, "f57": 7.88, "f58": 9.23, "f59": 9.15, "f60": 7.08, "f61": 12.92, "f62": 11.54, "f155": 0, "f280": 22.5}, {"name": "Mistral Medium 3", "creator": "", "open_weights": false, "f43": 134, "f155": 0}, {"name": "Mistral Large (Feb '24)", "creator": "", "open_weights": false, "f43": 122.1, "f155": 0}, {"name": "Magistral Medium 1", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mistral Saba", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mistral Small (Sep '24)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Magistral Medium 1.2", "creator": "", "open_weights": false, "f155": 0}, {"name": "Devstral Small (Jul '25)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Devstral Medium", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mixtral 8x22B Instruct", "creator": "", "open_weights": false, "f43": 122, "f155": 0, "f281": 103.8}, {"name": "Devstral Small (May '25)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Devstral Small 2", "creator": "", "open_weights": false, "f155": 0}, {"name": "Pixtral Large", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mistral Small 3", "creator": "", "open_weights": false, "f46": 9.81, "f47": 6.54, "f48": 5.15, "f49": 13.62, "f50": 5.46, "f51": 8.31, "f52": 6.51, "f53": 6.8, "f54": 5.38, "f55": 4.88, "f56": 9, "f57": 6.46, "f58": 9.77, "f59": 8.62, "f60": 5.85, "f61": 12.73, "f62": 11.04, "f155": 0}, {"name": "K2 Horizon 7B", "creator": "", "open_weights": false, "f155": 0}, {"name": "K2 Horizon 3.7B", "creator": "", "open_weights": false, "f155": 0}, {"name": "K2 Horizon MoVA 36B A4B", "creator": "", "open_weights": false, "f155": 0}, {"name": "K2 Think V2", "creator": "", "open_weights": false, "f155": 0}, {"name": "K2 Horizon 0.9B", "creator": "", "open_weights": false, "f155": 0}, {"name": "K2-V2 (High)", "creator": "", "open_weights": false, "f155": 0}, {"name": "K2-V2 (Low)", "creator": "", "open_weights": false, "f155": 0}, {"name": "K2-V2 (Medium)", "creator": "", "open_weights": false, "f155": 0}, {"name": "NVIDIA Nemotron 3 Nano 4B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Llama 3.3 Nemotron Super 49B v1 (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Llama Nemotron Super 49B v1.5 (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nemotron 3.5 Bolt E4B 4GB (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nemotron 3 Super 120B A12B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "NVIDIA Nemotron Nano 12B v2 VL (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Llama 3.1 Nemotron Instruct 70B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nemotron 3.5 Bolt 74B-A9B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nemotron Cascade 2 30B A3B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Llama 3.1 Nemotron Nano 4B v1.1 (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Llama 3.3 Nemotron Super 49B v1 (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Llama 3.1 Nemotron Ultra 253B v1 (Reasoning)", "creator": "", "open_weights": false, "f46": 15.5, "f47": 8.85, "f48": 6.35, "f49": 14.27, "f50": 6.5, "f51": 11.23, "f52": 10.2, "f53": 9.82, "f54": 6.96, "f55": 7.73, "f56": 9.38, "f57": 9.65, "f58": 9.5, "f59": 11.08, "f60": 8.54, "f61": 14.12, "f62": 12.08, "f155": 0}, {"name": "Llama Nemotron Super 49B v1.5 (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Command-R+ (Apr '24)", "creator": "", "open_weights": false, "f43": 119.2, "f155": 0, "f280": 17.4}, {"name": "Command-R (Mar '24)", "creator": "", "open_weights": false, "f43": 119.2, "f155": 0}, {"name": "JT-35B-Flash", "creator": "", "open_weights": false, "f155": 0}, {"name": "JT-MINI", "creator": "", "open_weights": false, "f155": 0}, {"name": "JT-4.1 Flash 236B A21B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "JT-4.1 Flash 236B A21B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mercury 2", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nova 2.0 Omni (Medium)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nova 2.0 Omni (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nova Pro", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nova Lite", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nova 2.0 Omni (Low)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nova Premier", "creator": "", "open_weights": false, "f155": 0}, {"name": "Sonar Reasoning", "creator": "", "open_weights": false, "f155": 0}, {"name": "Sonar Reasoning Pro", "creator": "", "open_weights": false, "f155": 0}, {"name": "Sonar Pro", "creator": "", "open_weights": false, "f155": 0}, {"name": "Sonar", "creator": "", "open_weights": false, "f155": 0}, {"name": "R1 1776", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 4.2 3B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 4.2 30B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 4.0 Micro", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 3.3 8B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 4.0 350M", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 4.0 H Small", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 4.1 8B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 4.1 3B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 4.0 1B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 4.0 H 350M", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 4.1 30B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Granite 4.0 H 1B", "creator": "", "open_weights": false, "f155": 0}, {"name": "LFM2 1.2B", "creator": "", "open_weights": false, "f155": 0}, {"name": "LFM 40B", "creator": "", "open_weights": false, "f155": 0}, {"name": "LFM2.5-VL-1.6B", "creator": "", "open_weights": false, "f155": 0}, {"name": "LFM2.5-1.2B-Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "LFM2.5-1.2B-Thinking", "creator": "", "open_weights": false, "f155": 0}, {"name": "LFM2 8B A1B", "creator": "", "open_weights": false, "f155": 0}, {"name": "LFM2 2.6B", "creator": "", "open_weights": false, "f155": 0}, {"name": "LFM2.5-2.6B", "creator": "", "open_weights": false, "f155": 0}, {"name": "LFM2.5-8B-A1B", "creator": "", "open_weights": false, "f155": 0}, {"name": "LFM2 24B A2B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Solar Pro 2 (Preview) (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Solar Pro 2 (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Solar Open 100B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Solar Open2 250B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Solar Pro 2 (Preview) (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Solar Pro 3", "creator": "", "open_weights": false, "f155": 0}, {"name": "Solar Mini", "creator": "", "open_weights": false, "f155": 0}, {"name": "Solar Pro 2 (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "K-EXAONE 2.0 0803", "creator": "", "open_weights": false, "f155": 0}, {"name": "EXAONE 4.0 32B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "EXAONE 4.5 33B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "EXAONE 4.0 32B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "EXAONE 4.5 33B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "K-EXAONE (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Exaone 4.0 1.2B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "K-EXAONE (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Exaone 4.0 1.2B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DBRX Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Hermes 3 - Llama-3.1 70B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Hermes 4 - Llama-3.1 70B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Hermes 4 - Llama-3.1 70B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepHermes 3 - Mistral 24B Preview (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "DeepHermes 3 - Llama-3.1 8B Preview (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Phi-3 Mini Instruct 3.8B", "creator": "", "open_weights": false, "f43": 117.2, "f155": 0}, {"name": "G9v3-3B", "creator": "", "open_weights": false, "f155": 0}, {"name": "G9v3-39A5B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Olmo 3 7B Think", "creator": "", "open_weights": false, "f155": 0}, {"name": "Olmo 3.1 32B Think", "creator": "", "open_weights": false, "f155": 0}, {"name": "Molmo2-8B", "creator": "", "open_weights": false, "f155": 0}, {"name": "OLMo 2 32B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Olmo 3 7B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Olmo 3.1 32B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Molmo 7B-D", "creator": "", "open_weights": false, "f155": 0}, {"name": "Olmo 3 32B Think", "creator": "", "open_weights": false, "f155": 0}, {"name": "Llama 3.1 Tulu3 405B", "creator": "", "open_weights": false, "f155": 0}, {"name": "OLMo 2 7B", "creator": "", "open_weights": false, "f155": 0}, {"name": "HyperCLOVA X SEED Think (32B)", "creator": "", "open_weights": false, "f155": 0}, {"name": "HyperNova 60B 2605 (High, Based on gpt-oss-120b)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Sarvam M (Reasoning, Based on Mistral Small 3.1)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Sarvam 30B (High)", "creator": "", "open_weights": false, "f155": 0}, {"name": "INTELLECT-3 (Based on GLM-4.5-Air)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nex-N2-Pro (Based on Qwen3.5-397B-A17B)", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiniCPM-V 4.6 1.3B", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiniCPM5-2B", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiniCPM5-1B (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "MiniCPM5-1B (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Apertus 70B Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Doubao Seed Code", "creator": "", "open_weights": false, "f155": 0}, {"name": "Seed-OSS-36B-Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Jamba 1.5 Mini", "creator": "", "open_weights": false, "f155": 0}, {"name": "Jamba 1.7 Large", "creator": "", "open_weights": false, "f155": 0}, {"name": "Jamba 1.6 Large", "creator": "", "open_weights": false, "f155": 0}, {"name": "Jamba 1.5 Large", "creator": "", "open_weights": false, "f155": 0}, {"name": "Jamba 1.7 Mini", "creator": "", "open_weights": false, "f155": 0}, {"name": "Jamba 1.6 Mini", "creator": "", "open_weights": false, "f155": 0}, {"name": "Jamba Reasoning 3B", "creator": "", "open_weights": false, "f155": 0}, {"name": "LongCat Flash Lite", "creator": "", "open_weights": false, "f155": 0}, {"name": "Tri-21B-Think", "creator": "", "open_weights": false, "f155": 0}, {"name": "Tri-21B-think Preview", "creator": "", "open_weights": false, "f155": 0}, {"name": "Motif-2-12.7B-Reasoning", "creator": "", "open_weights": false, "f155": 0}, {"name": "Motif 3 (Beta)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Motif 3", "creator": "", "open_weights": false, "f155": 0}, {"name": "Nanbeige4.1-3B", "creator": "", "open_weights": false, "f155": 0}, {"name": "A.X-K2", "creator": "", "open_weights": false, "f155": 0}, {"name": "Hy3-preview (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Hy3-preview (Non-reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "ERNIE 5.0 Thinking Preview", "creator": "", "open_weights": false, "f155": 0}, {"name": "ERNIE 4.5 300B A47B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Apriel-v1.6-15B-Thinker", "creator": "", "open_weights": false, "f155": 0}, {"name": "Apriel-v1.5-15B-Thinker", "creator": "", "open_weights": false, "f155": 0}, {"name": "Reka Flash (Sep '24)", "creator": "", "open_weights": false, "f155": 0}, {"name": "Arctic Instruct", "creator": "", "open_weights": false, "f155": 0}, {"name": "Trinity Large Thinking", "creator": "", "open_weights": false, "f155": 0}, {"name": "Falcon-H1R-7B", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mi:dm K 2.5 Pro", "creator": "", "open_weights": false, "f155": 0}, {"name": "Mi:dm K 2.5 Pro Preview", "creator": "", "open_weights": false, "f155": 0}, {"name": "Cogito v2.1 (Reasoning)", "creator": "", "open_weights": false, "f155": 0}, {"name": "OpenChat 3.5 (1210)", "creator": "", "open_weights": false, "f155": 0}, {"name": "KAT-Coder-Pro V1", "creator": "", "open_weights": false, "f155": 0}, {"name": "KAT Coder Pro V2", "creator": "", "open_weights": false, "f155": 0}];
