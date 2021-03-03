import React from "react";

import { ExperienceBar } from "../components/ExperienceBar";

// Left side
import { Profile } from "../components/Profile";
import { Countdown } from "../components/Countdown";
import { CompletedChallenges } from "../components/CompletedChallenges";

// Right side
import { ChallengeBox } from "../components/ChallengeBox";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}> 
      <Head>
        <title>Moveit</title>
      </Head>  
      
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
    </div>
  );
}
