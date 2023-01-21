import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, PlaylistCard } from "./";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  console.log({
    videos,
  });
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          <Video item={item} loading={false} />
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

const Video = ({ item, loading }) => {
  if (loading) {
    return "Loading component";
  } else if (item.id.videoId) {
    return <VideoCard video={item} />;
  } else if (item.id.channelId) {
    return <ChannelCard channelDetail={item} />;
  } else if (item.id.playlistId) {
    return <PlaylistCard playlistDetail={item} />;
  } else return "Fuck you";
};
