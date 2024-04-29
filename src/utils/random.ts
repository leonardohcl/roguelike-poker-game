import Card from "@/model/Card";
import { allRanks } from "@/types/Rank";
import { allSuits } from "@/types/Suit";

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * max) + min;
}

export function randomListElement<T>(list: Array<T>) {
  return list[randomInt(0, list.length)];
}

export function randomSuit() {
  return randomListElement(allSuits());
}
export function randomRank() {
  return randomListElement(allRanks());
}

export function randomPlayingCard(amount = 1) {
  return new Array(amount)
    .fill(0)
    .map(() => new Card(randomSuit(), randomRank()));
}
