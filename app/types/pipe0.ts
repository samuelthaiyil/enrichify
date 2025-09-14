export type EmailEnrichmentResponse = {
  id: string;
  status: "completed" | string;
  organization_id: string;
  order: number[];
  field_definitions: Record<string, FieldDefinition>;
  pipes: Pipe[];
  errors: any[];
  records: Record<string, RecordEntry>;
};

export type FieldDefinition = {
  type: string;
  label: string;
  json_metadata: any | null;
  added_by: {
    ref: string;
    config_hash: string | null;
    pipe_index: number | null;
  };
  format: string | null;
};

export type Pipe = {
  pipe_id: string;
  config: {
    providers: Array<{
      provider: string;
    }>;
    output_fields: Record<
      string,
      {
        alias: string;
        enabled: boolean;
      }
    >;
  };
};

export type RecordEntry = {
  id: number;
  fields: Record<string, FieldValue>;
};

export type FieldValue = {
  value: string | null;
  status: "completed" | string;
  type: string;
  reason: string | null;
  claimed_by: {
    ref: string;
    config_hash: string | null;
  };
  resolved_by: {
    ref: string;
    config_hash: string | null;
    input_hash: string | null;
  };
  meta: null | {
    waterfall?: {
      attempted_providers: Array<{ provider: string }>;
      available_providers: string[];
      successful_provider: string;
    };
    [key: string]: any;
  };
  format: string | null;
  ui: {
    display_value?: string | null;
    widgets: Record<string, any>;
  };
};
