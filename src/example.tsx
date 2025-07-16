import React from "react";

export const lulz = (count: number) => {
  return "LOL!".repeat(count);
};

export const Rofl = (props: { count: number }) => (
  <h1>{"ROFL!".repeat(props.count)}</h1>
);

interface UserWithAccessTimes {
  id: string;
  accessTimes: number[];
}

export function findHighAccessEmployees(access_times: string[][]): string[] {
  // Converts a time into a number between 0 and 24 * 60 - 1
  const convertTime = (timeString: string) => {
    const hours = parseInt(timeString.slice(0, 2));
    const minutes = parseInt(timeString.slice(2));
    return hours * 60 + minutes;
  };

  // Finds a user with multiple accesses
  const isFrequentAccessEmployee = (user: UserWithAccessTimes) => {
    // Need at least three accesses to qualify
    if (user.accessTimes.length < 3) {
      return false;
    }

    // Sort access times in ascending order.
    const accessTimes = user.accessTimes.sort((a, b) => a - b);
    console.log(`access times for ${user.id}`, accessTimes);

    // For each access time, check if the next next access time is less than an hour later
    for (
      let startIndex = 0;
      startIndex < user.accessTimes.length - 2;
      startIndex++
    ) {
      console.log("testing access time", user.accessTimes[startIndex] + 60);
      console.log("comparator time", user.accessTimes[startIndex + 2]);
      if (
        user.accessTimes[startIndex + 2] <
        user.accessTimes[startIndex] + 60
      ) {
        console.log(`hit for ${user.id}`);
        // it is, return true
        return true;
      }
      console.log("looping");
    }
    // or return false.
    return false;
  };

  const betterRepresentation = new Map<string, UserWithAccessTimes>();

  access_times.reduce(
    (map: Map<string, UserWithAccessTimes>, logEntry: string[]) => {
      console.log("log entry", logEntry);
      // Create new entry if none exists
      let entry: UserWithAccessTimes | undefined;
      const userId = logEntry[0];

      if (!map.has(userId)) {
        entry = { id: userId, accessTimes: [] };
        map.set(userId, entry);
      } else {
        entry = map.get(userId);
      }

      entry?.accessTimes.push(convertTime(logEntry[1]));
      return map;
    },
    betterRepresentation
  );

  console.log(betterRepresentation);

  // let's iterate over the map entries and test them
  const frequentAccessEmployeeIds = [...betterRepresentation]
    .filter((user) => isFrequentAccessEmployee(user[1]))
    .map((entry) => entry[0]);

  return frequentAccessEmployeeIds;
}
