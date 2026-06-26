import {
  CogIcon,
  ArrowPathIcon,
  LinkIcon,
  CubeIcon,
  ChartPieIcon,
  ArrowTrendingUpIcon,
} from "@/components/icons";
import { ComponentType } from "react";

export interface Feature {
  id: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  title: string;
  shortDescription: string;
  description: string;
  tag: string;
  metric: string;
}

export const FEATURES: Feature[] = [
  {
    id: "workflow-automation",
    icon: CogIcon,
    title: "Automate the busywork",
    shortDescription: "Workflow automation that does the heavy lifting for you.",
    description: "Eliminate repetitive scripting. Build multi-step workflows that trigger on database changes, API events, or schedules. Error handling and retries are built-in automatically.",
    tag: "Workflows",
    metric: "12ms Latency",
  },
  {
    id: "data-pipelines",
    icon: ArrowPathIcon,
    title: "Always in sync",
    shortDescription: "Continuous data pipelines streaming in real-time.",
    description: "Keep your operational databases, data warehouses, and caches updated with change data capture (CDC) pipelines that process records with sub-second latency.",
    tag: "Pipelines",
    metric: "99.99% Delivery",
  },
  {
    id: "integrations",
    icon: LinkIcon,
    title: "Connects everywhere",
    shortDescription: "Native integrations with your entire software stack.",
    description: "Instantly link with PostgreSQL, Snowflake, Salesforce, Slack, and 200+ other systems. Zero setup required, fully monitored and secure endpoints.",
    tag: "Integrations",
    metric: "200+ Connectors",
  },
  {
    id: "unified-layer",
    icon: CubeIcon,
    title: "One unified data layer",
    shortDescription: "Infrastructure and GraphQL/REST API unified.",
    description: "Access all your isolated data stores through a single federated API gateway. Write unified queries that combine data across multiple systems instantly.",
    tag: "Infrastructure",
    metric: "GraphQL / REST",
  },
  {
    id: "realtime-analytics",
    icon: ChartPieIcon,
    title: "See everything at a glance",
    shortDescription: "Real-time analytics and system monitoring dashboard.",
    description: "Monitor execution health, data throughput, and custom business metrics on a live-updating console with zero performance impact on production systems.",
    tag: "Analytics",
    metric: "Real-Time Stats",
  },
  {
    id: "scale",
    icon: ArrowTrendingUpIcon,
    title: "Built to scale",
    shortDescription: "Serverless execution that grows with your usage.",
    description: "Process 10 records or 10 billion records. Our distributed serverless engine automatically scales capacity to meet query demand without manual server tuning.",
    tag: "Scaling",
    metric: "10B+ Daily Tasks",
  },
];
