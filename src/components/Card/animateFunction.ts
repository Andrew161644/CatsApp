import type { RunAnimationIntent } from "../../types";
import { animationCahngeFuncDict } from "./actionHandlerDict";
import type { CardState, CardStore } from "./types";

/**
 * Запускает анимации для карточки
 * @param cardStore Хранилище состояния для карточки
 * @param animationIntents Список команд анимации
 * @returns
 */
export const animateFunction = (
  cardStore: CardStore,
  animationIntents: RunAnimationIntent[]
) => {
  if (!animationIntents.length) return;

  cardStore.setAnimationRunning(true);

  const animationPromises = animationIntents.map((intent) => {
    const timeoutPromise = new Promise((resolve) => {
      setTimeout(() => {
        const animationFunction = animationCahngeFuncDict[intent.animationType];
        animationFunction(cardStore);
        resolve(intent.animationType);
      }, intent.delay);
    });

    return timeoutPromise;
  });

  animationPromises.length &&
    Promise.all(animationPromises).then((values) => {
      cardStore.setAnimationRunning(false);
    });
};
