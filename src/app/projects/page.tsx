import React from "react";

type MyData = {
  page: {
    rows: Array<{
      row: {
        title: string;
        url: string;
        type: string;
      };
      row_id: number;
    }>;
  };
};

async function fetchProjectsDataFromAPI(): Promise<MyData> {
  let auth = btoa(`${process.env.USERNAME}:${process.env.APIKEY}`);
  const response = await fetch(
    `https://csvbase.com/mandareis/Projects/export/json`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`,
      },
      cache: "force-cache",
    }
  );

  const data: MyData = await response.json();

  return data;
}

export default async function ProjectsPage() {
  let data = await fetchProjectsDataFromAPI();
  let projectsData = data.page.rows;

  return projectsData.map((record) => {
    return <span key={record.row_id}>{record.row.title}</span>;
  });
}
