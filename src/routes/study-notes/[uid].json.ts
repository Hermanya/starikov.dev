import type { RequestHandler } from "@sveltejs/kit";
import courses from "../../learning-notes";
import financialMarkets from "../../learning-notes/financial-markets.json";
import inclusiveLeardership from "../../learning-notes/inclusive-leadership.json";
import inspiringAndMotivating from "../../learning-notes/inspiring-and-motivating.json";
import lifeAfterCovid from "../../learning-notes/life-after-covid.json";
import perspectivesOnManagement from "../../learning-notes/perspectives-on-management.json";
import teamCulture from "../../learning-notes/team-culture.json";
import influencingPeople from "../../learning-notes/influencing-people.json";

const allNotes = [
  financialMarkets,
  inclusiveLeardership,
  inspiringAndMotivating,
  lifeAfterCovid,
  perspectivesOnManagement,
  teamCulture,
  influencingPeople,
];

// GET /study-notes/:uid.json
export const get: RequestHandler<{}> = async (event) => {
  const { uid: courseId } = event.params as { uid: string };

  const course = courses.find((_) => _.id === courseId);
  const notes = allNotes.find((_) => _.courseId === courseId).notes;
  return {
    status: 200,
    body: {
      ...course,
      notes,
    },
  };
};
