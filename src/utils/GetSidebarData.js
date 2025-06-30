import {
  VscFiles,
  VscSearch,
  VscDebugAlt,
  VscExtensions,
} from "react-icons/vsc";
import { IoIosGitBranch } from "react-icons/io";

function GetSidebarData() {
  return [
    {
      id: 1,
      name: "File",
      url: "file/",
      iconComponent: VscFiles,
      matchUrls: ["/", "/file"],
    },
    {
      id: 2,
      name: "Search",
      url: "search/",
      iconComponent: VscSearch,
      matchUrls: ["/search"],
    },
    {
      id: 3,
      name: "Git",
      url: "git/",
      iconComponent: IoIosGitBranch,
      matchUrls: ["/git"],
    },
    {
      id: 4,
      name: "Debug",
      url: "debug/",
      iconComponent: VscDebugAlt,
      matchUrls: ["/debug"],
    },
    {
      id: 5,
      name: "Extension",
      url: "extension/",
      iconComponent: VscExtensions,
      matchUrls: ["/extension"],
    },
  ];
}

export default GetSidebarData;
