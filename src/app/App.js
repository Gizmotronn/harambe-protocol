import { Routes, Route } from "react-router-dom";
import HomeV1 from "../pages/homeV1";
import HomeV2 from "../pages/homeV2";
import HomeV3 from "../pages/homeV3";
import Blogs from "../pages/blogs";
import RoadmapPage from "../pages/Roadmap";
import BlogDetails from "../pages/blogDetails";
import StakePage from "../pages/stake";
import { Provider as WagmiProvider } from "wagmi";
import { providers } from 'ethers';
import { useState } from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeV1 />} exact />
      <Route path="/home-two" element={<HomeV2 />} />
      <Route path="/home-three" element={<HomeV3 />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/post" element={<BlogDetails />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
      <Route path="/stake" element={<StakePage />} />
    </Routes>
  );
}

export default App;