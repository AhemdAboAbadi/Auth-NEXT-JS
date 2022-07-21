import { useState, useEffect } from "react";
import { getSession, signIn } from "next-auth/client";

function Dashboard() {
  const [loading, setLoading] = useState(true);


  const securePage = async () => {
    const session = await getSession();
    if (!session) {
      signIn();
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    securePage();
  }, []);


  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return <h1>Dashboard page</h1>;
  }

}

export default Dashboard;
