// 건강 기록 관련 타입. Swagger(HealthRecordCreateRequest) 기준 확정값.
export type RecordType = "SLEEP" | "SKIN_PHOTO" | "WATER" | "STRESS_EMOTION" | "EXERCISE" | "MEAL";

export interface HealthRecord {
  recordId: number;
  type: RecordType;
  value: Record<string, unknown>;
  photoUrl: string | null;
  recordedAt: string;
}

export interface RecordCategory {
  type: RecordType;
  label: string;
}

export const RECORD_CATEGORIES: RecordCategory[] = [
  { type: "SKIN_PHOTO", label: "피부" },
  { type: "SLEEP", label: "수면" },
  { type: "WATER", label: "수분" },
  { type: "STRESS_EMOTION", label: "감정" },
  { type: "EXERCISE", label: "운동" },
  { type: "MEAL", label: "식사" },
];
