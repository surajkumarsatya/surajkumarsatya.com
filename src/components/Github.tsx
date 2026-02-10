"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";

const Github = () => {
  // Replace with your actual GitHub username
  const username = "surajkumarsatya";
  const [totalContributions, setTotalContributions] = useState<number | string>(
    "...",
  );

  useEffect(() => {
    fetch(`https://github-contributions-api.deno.dev/${username}.json`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.totalContributions !== undefined) {
          setTotalContributions(data.totalContributions);
        }
      })
      .catch((err) =>
        console.error("Error fetching GitHub contributions:", err),
      );
  }, [username]);

  return (
    <section className="">
      {/* Header matching your 'Experience' style */}
      <header className="mb-6 flex justify-between items-end">
        <div>
          <p className="text-sm text-black dark:text-gray-300 mt-1">
            Total:{" "}
            <span className="font-bold text-black dark:text-gray-300">
              {totalContributions.toLocaleString()}
            </span>{" "}
            contributions
          </p>
        </div>
        <div className="text-right text-sm">
          <p className="text-gray-500">
            {/* Offline 🌑 Yesterday worked <span className="font-bold text-black">6m 47s</span> */}
          </p>
        </div>
      </header>

      {/* The Calendar Container */}
      <div className="p-6 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/10 rounded-xl shadow-sm overflow-hidden">
        <div className="relative">
          <GitHubCalendar
            username={username}
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            // Force the component to use light mode regardless of system settings
            colorScheme="light"
            theme={{
              light: [
                "#ebedf0", // Level 0
                "#9be9a8", // Level 1
                "#40c463", // Level 2
                "#30a14e", // Level 3
                "#216e39", // Level 4
              ],
            }}
            transformData={(data) => {
              // Show only the last 6 months (approx 130 days) to prevent overflow
              return data.slice(-280);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Github;
