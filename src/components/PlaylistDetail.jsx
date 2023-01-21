import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, PlaylistCard } from "./";
import { fetchFromAPI } from "../Utilities/fetchFromAPI";

const PlaylistDetail = () => {
  const [playlistDetail, setplaylistDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      console.log("ho");
      const data = await fetchFromAPI(`playlists?part=snippet&id=${id}`);

      setplaylistDetail(data?.items[0]);
      console.log("data : " + data);

      const videosData = await fetchFromAPI(
        `playlistItems?playlistId=${id}&part=snippet&&maxResults=50&order=date`
      );
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(1,5,13,1) 0%, rgba(16,145,140,1) 49%, rgba(177,15,121,1) 100%, rgba(11,144,152,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <PlaylistCard playlistDetail={playlistDetail} marginTop="-125px" />
      </Box>
      <Box display="flex" p="2" sx={{ backgroundColor: "red" }}>
        <Box sx={{ mr: { sm: "170px", lg: "125px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default PlaylistDetail;
