import React, { useState } from "react";
import {} from 'next-auth'

import Button from "../components/button";
import FormGroup from "../components/formgroup";
import InputGroup from "../components/input";

function SimpleLogin() {
  return (
    <div className="lg:w-1/4 w-2/3 md:w-1/2 mt-48 py-6 px-8 shadow mx-auto rounded-sm">
      <form className="w-full mx-auto text-center">
        <div className="">
          <h2 className="text-3xl font-bold text-gray-800">Welcome back</h2>
          <p className="mt-3 text-gray-800">
            New to this Planet?
            <a href="#" className="text-blue-400 m-2">
              Sign up
            </a>
          </p>
        </div>
        <div className="mt-12">
          <FormGroup>
            <InputGroup
              type="email"
              name="email"
              placeholder="Your email address"
            />
          </FormGroup>
          <FormGroup>
            <InputGroup
              type="password"
              name="password"
              placeholder="Your password"
            />
          </FormGroup>
          <FormGroup>
            <Button text="Log In" submit full />
          </FormGroup>
          <div className="text-right">
            <a href="#" className="text-blue-400">
              Forgot your password?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SimpleLogin;
