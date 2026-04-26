// performance-test.js - Compare event delegation vs individual listeners

export function testIndividualListeners(containerId, itemCount) {
  const container = document.getElementById(containerId);

  if (!container) {
    throw new Error(`Container with id "${containerId}" was not found.`);
  }

  const startTime = performance.now();

  for (let i = 1; i <= itemCount; i += 1) {
    const item = container.querySelector(`[data-id="todo-${i}"]`);

    if (!item) {
      continue;
    }

    const checkbox = item.querySelector('input[type="checkbox"]');

    if (!checkbox) {
      continue;
    }

    checkbox.addEventListener("change", () => {
      item.classList.toggle("completed", checkbox.checked);
    });
  }

  const endTime = performance.now();

  return Number((endTime - startTime).toFixed(2));
}

export function testEventDelegation(containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    throw new Error(`Container with id "${containerId}" was not found.`);
  }

  const startTime = performance.now();

  const testHandler = (event) => {
    if (event.target.type === "checkbox") {
      const item = event.target.closest(".todo-item");

      if (item) {
        item.classList.toggle("completed", event.target.checked);
      }
    }
  };

  container.addEventListener("change", testHandler);

  const endTime = performance.now();

  container.removeEventListener("change", testHandler);

  return Number((endTime - startTime).toFixed(2));
}

export function runDelegationPerformanceTest(containerId, itemCount = 1000) {
  const individualTime = testIndividualListeners(containerId, itemCount);
  const delegationTime = testEventDelegation(containerId);

  const result = {
    itemCount,
    individualListenersTimeMs: individualTime,
    eventDelegationTimeMs: delegationTime,
    explanation:
      "Event delegation attaches one listener to the parent instead of one listener per item."
  };

  console.table([result]);

  return result;
}