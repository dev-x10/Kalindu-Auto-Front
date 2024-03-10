"use client";
import React, { useEffect } from "react";
import useDataStore from "@/services/dataservice";
const API_ENDPOINT: string = "https://jsonplaceholder.typicode.com/users";
//TEST CODE

function Register() {
  const { data, loading, error, fetchData, postData } = useDataStore();
  useEffect(() => {
    fetchData(API_ENDPOINT);
  }, [fetchData]);

  if (loading) {
    return <div>Loading</div>;
  } else
    return (
      <>
        {data &&
          data.map(
            (element: {
              id: React.Key | null | undefined;
              name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
            }) => <span key={element.id}>{element.name}</span>,
          )}
      </>
    );
}

export default Register;
