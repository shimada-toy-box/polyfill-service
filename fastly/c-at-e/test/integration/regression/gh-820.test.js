/* eslint-env mocha */

"use strict";

import assert from "proclaim";
import axios from "../helpers.js";
import vm from "vm";

describe("GET /v2/polyfill.min.js?features=default,Intl.~locale.fr,Intl.~locale.en,Intl.~locale.es", function () {
  it("responds with valid javascript", async function () {
    const response = await axios.get(
      `/v2/polyfill.min.js?features=default,Intl.~locale.fr,Intl.~locale.en,Intl.~locale.es&use-compute-at-edge-backend=yes`
    );
    assert.doesNotThrow(() => new vm.Script(response.data));
  });
});

describe("GET /v2/polyfill.min.js?features=es5,Intl.~locale.en-AU&flags=always,gated", function () {
  it("responds with valid javascript", async function () {
    const response = await axios.get(
      `/v2/polyfill.min.js?features=es5,Intl.~locale.en-AU&flags=always,gated&use-compute-at-edge-backend=yes`
    );
    assert.doesNotThrow(() => new vm.Script(response.data));
  });
});

describe("GET /v2/polyfill.min.js?features=Intl.~locale.en,Intl.~locale.de,Intl.~locale.sv,fetch,Object.assign,Promise", function () {
  it("responds with valid javascript", async function () {
    const response = await axios.get(
      `/v2/polyfill.min.js?features=Intl.~locale.en,Intl.~locale.de,Intl.~locale.sv,fetch,Object.assign,Promise&use-compute-at-edge-backend=yes`
    );
    assert.doesNotThrow(() => new vm.Script(response.data));
  });
});

describe("GET /v2/polyfill.min.js?features=Intl.~locale.en&unknown=polyfill", function () {
  it("responds with valid javascript", async function () {
    const response = await axios.get(
      `/v2/polyfill.min.js?features=Intl.~locale.en&unknown=polyfill&use-compute-at-edge-backend=yes`
    );
    assert.doesNotThrow(() => new vm.Script(response.data));
  });
});
