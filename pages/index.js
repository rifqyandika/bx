import React, { useState, useEffect } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faQuestionCircle,
  faBell,
  faBars,
  faTimes,
  faCog,
  faSignOutAlt,
  faHeart,
  faUsers,
  faEye,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

import SimpleSideNav from "../components/nav"
import Avatar from "../components/avatar"
import StatCard from "../components/stats"
import StripedTable from "../components/table"
import Layout from "../components/layout";

const Home = ({ data }) => {
  const [results, setResults] = useState(data);

  const onChange = (e) => {
    const data = { ...results };

    let name = e.target.name;

    let resultType = name.split(" ")[0].toLowerCase();
    let resultMacro = name.split(" ")[1].toLowerCase();

    data[resultMacro][resultType] = parseInt(e.target.value);

    setResults(data);
  };

  const getDataForPreviousDay = async () => {
    let currentDate = dayjs(results.date);
    let newDate = currentDate.subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss");
    const res = await fetch("http://localhost:3000/api/daily?date=" + newDate);
    const json = await res.json();

    setResults(json);
  };

  const getDataForNextDay = async () => {
    let currentDate = dayjs(results.date);
    let newDate = currentDate.add(1, "day").format("YYYY-MM-DDTHH:mm:ss");
    const res = await fetch("http://localhost:3000/api/daily?date=" + newDate);
    const json = await res.json();

    setResults(json);
  };

  const updateMacros = async () => {
    const res = await fetch("http://localhost:3000/api/daily", {
      method: "post",
      body: JSON.stringify(results),
    });

    console.log(res);
  };

  return (
    <Layout title="Home">
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-full max-w-screen-xl py-12 px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <div className="flex flex-wrap justify-between">
              <StatCard
                title="Subscribers"
                stat={24}
                link="/"
                icon={<FontAwesomeIcon icon={faUsers} />}
                className="mb-6 xl:mb-0"
              />
              <StatCard
                title="Total Views"
                stat={"328,743"}
                link="/"
                icon={<FontAwesomeIcon icon={faEye} />}
                statSize="text-4xl"
                className="mb-6 xl:mb-0"
              />
              <StatCard
                title="Unread Messages"
                stat={2}
                link="/"
                icon={<FontAwesomeIcon icon={faEnvelope} />}
                className="mb-6 xl:mb-0"
              />
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Subscribers</h2>
            <StripedTable />
          </div>
        </div>

    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/daily");
  const json = await res.json();
  return { data: json };
};

export default Home;
