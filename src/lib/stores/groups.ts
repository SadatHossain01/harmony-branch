import { writable, type Writable } from "svelte/store";
import type { Group, Subject } from "../data/groups";

export const groups: Writable<Group[]> = writable<Group[]>([  
    {
      id: "1",
      name: "BUET CSE 19",
      intro: "",
      image_link: `https://source.unsplash.com/random/1`,
      group_link: "",
      subjects: [
        { id: "1", name: "CSE215" },
        { id: "2", name: "CSE216" },
        { id: "3", name: "CSE208" },
      ],
    },
    {
      id: "2",
      name: "Harmony devs",
      intro: "",
      image_link: `https://source.unsplash.com/random/2`,
      group_link: "",
      subjects: [
        { id: "1", name: "Frontend" },
        { id: "2", name: "Backend" },
        { id: "3", name: "Server" },
      ],
    },
  ]);

export const current_group: Writable<Group> = writable<Group>(undefined);
export const current_subject: Writable<Subject> = writable<Subject>(undefined);
export const current_edited_group: Writable<Group> = writable<Group>(undefined);
