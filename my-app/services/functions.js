import TrelloApi from "../axiosConfig";

export const getBoards = async () => {
  const result = await TrelloApi.get(
    "organizations/62d8666334d67e3e8e573137/boards?key=8e740d7612365877302ab6606f814130&token=3904fa9ca94e2bf5b290eecd9136660466f2232171e4938b0bfc425b1eb64353"
  );
  return result.data;
}

export const getCards = async () => {
  const result = await TrelloApi.get(
    "boards/62daab3e2268ea745c0e2cfb/cards?key=8e740d7612365877302ab6606f814130&token=3904fa9ca94e2bf5b290eecd9136660466f2232171e4938b0bfc425b1eb64353"
  );
  return result.data;
}

export const getLists = async () => {
  const result = await TrelloApi.get(
    "boards/62daab3e2268ea745c0e2cfb/lists?key=8e740d7612365877302ab6606f814130&token=3904fa9ca94e2bf5b290eecd9136660466f2232171e4938b0bfc425b1eb64353"
  );
  return result.data;
}