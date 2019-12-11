import React from "react";
import useFetch from "react-fetch-hook";
import ListLoader from '../common/ListLoader.js'
import AlbumList from "./AlbumList.js";
import {albumList} from "./iTunesAlbumsApi.js";

export default () => {
  const { isLoading, data  } = useFetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
  const albumListData = albumList(data);
  return isLoading ? <ListLoader/> : <AlbumList data={albumListData}/>;
}