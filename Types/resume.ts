import { Timestamp } from "next/dist/server/lib/cache-handlers/types"

  export interface Resume{
    id: number;
    file_url: string;
    file_name: string;
    is_active: boolean;
    created_at: Timestamp;
    updated_at: Timestamp;
  }