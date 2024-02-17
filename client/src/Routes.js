
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Concepts from "./components/concepts/Concepts";
import SearchResults from "./components/SearchResults"
import Variables from "./components/concepts/Variables";
import Operators from "./components/concepts/Operators";
import ControlFlow from "./components/concepts/ControlFlow";
import Functions from "./components/concepts/Functions";
import Scope from "./components/concepts/Scope";
import ArrayMethods from "./components/concepts/ArrayMethods";
import ArrayIteration from "./components/concepts/ArrayIteration";
import Objects from "./components/concepts/Objects";
import PromisesAndAsynchronousPHP from "./components/concepts/PromisesandAsynchronousPHP";
import ErrorHandling from "./components/concepts/ErrorHandling";
import JSONHandling from "./components/concepts/JSONHandling";
import PHPTagsAndBasics from "./components/concepts/PHPTagsandBasics";
import DatabaseInteraction from "./components/concepts/DatabaseInteraction";
import WebDevelopmentConcepts from "./components/concepts/WebDevelopmentConcepts";
import PHPAndHTML from "./components/concepts/PHPandHTML";
import Security from "./components/concepts/Security";
import AdvancedPHPFeatures from "./components/concepts/AdvancedPHPFeatures";
import PHPIniConfiguration from "./components/concepts/PHP.iniConfiguration";
import PHPFrameworksAndComposer from "./components/concepts/PHPFrameworksandComposer";

function Links() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/concept" element={<Concepts />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/variables" element={<Variables />} />
        <Route path="/operators" element={<Operators />} />
        <Route path="/control-flow" element={<ControlFlow />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/array-methods" element={<ArrayMethods />} />
        <Route path="/array-iteration" element={<ArrayIteration />} />
        <Route path="/objects" element={<Objects />} />
        <Route path="/promises-and-asynchronous-php" element={<PromisesAndAsynchronousPHP />} />
        <Route path="/error-handling" element={<ErrorHandling />} />
        <Route path="/json-handling" element={<JSONHandling />} />
        <Route path="/php-tags-and-basics" element={<PHPTagsAndBasics />} />
        <Route path="/database-interaction" element={<DatabaseInteraction />} />
        <Route path="/web-development-concepts" element={<WebDevelopmentConcepts />} />
        <Route path="/php-and-html" element={<PHPAndHTML />} />
        <Route path="/security" element={<Security />} />
        <Route path="/advanced-php-features" element={<AdvancedPHPFeatures />} />
        <Route path="/php-ini-configuration" element={<PHPIniConfiguration />} />
        <Route path="/php-frameworks-and-composer" element={<PHPFrameworksAndComposer />} />
      </Routes>
    </>
  );
}

export default Links;
