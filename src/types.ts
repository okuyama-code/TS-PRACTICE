export interface User {
  id: number | string;
  name: string;
  role: "student" | "graduate" | "mentor";
  email: string;
  age: number;
  postCode: string;
  phone: string;
  hobbies: string[];
  url: string;
  experienceDays?: number;
  useLangs?: string[];
  studyMinutes?: number;
  taskCode?: number;
  studyLangs?: string[] | string;
  score?: number;
  availableStartCode?: number;
  availableEndCode?: number;
}
