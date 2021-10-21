import React, { Component } from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import StripedTable from "../../components/table";
import Button from "../../components/button";

export default class sites extends Component {
  render() {
    return (
      <Layout title="Sites">
        <div className="text-right mb-4">
          <Link href="/sites/add">
            <Button text="Add Site" />
          </Link>
        </div>
        <StripedTable />
      </Layout>
    );
  }
}
