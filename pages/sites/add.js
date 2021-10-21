import React, { Component } from "react";
import Layout from "../../components/layout";
import InputGroup from '../../components/input'
import Button from "../../components/button";

export default class add extends Component {
  render() {
    return (
      <Layout title="Add Site">
        <div className="flex justify-center items-center bg-gray-200 shadow-sm rounded-xl">
          <div class="mt-8 w-2/4">
            <div class="grid grid-cols-1 gap-6 w-full">
              <InputGroup
                type="text"
                name="email"
                label="Site Name"
                placeholder="Google"
                description="Please enter the site name"
              />
              <InputGroup
                type="email"
                name="email"
                label="Site Address"
                placeholder="https://google.com"
                description="Please enter your site address"
              />
              <InputGroup
                type="password"
                name="key"
                label="Api Key"
                placeholder="halshdlkeuihalshdlsa"
                description="Please enter Api Key"
              />
              <Button className="mb-8" text="Submit" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
