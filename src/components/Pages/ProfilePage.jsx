import React, { useEffect, useState } from "react";
import { auth, db } from "../container/Firebase";
import { doc, getDoc } from "firebase/firestore";
import img_user from "../../assets/logo-icon.png"

function ProfilePage() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {userDetails ? (
        <div className="p-8 bg-white rounded-lg shadow-md w-96">
          <div className="flex justify-center mb-4">
            <img
              src={img_user} // Placeholder image jika tidak ada foto
              alt="Profile"
              className="object-contain w-32 h-32 rounded-full"
            />
          </div>
          <h1 className="mb-2 text-2xl font-semibold text-center">
            Welcome, {userDetails.fullName}!
          </h1>
          <div className="text-gray-700">
            <p className="mb-2">
              <span className="font-semibold">Email:</span> {userDetails.email}
            </p>
            {/* {userDetails.lastName && (
              <p>
                <span className="font-semibold">Last Name:</span>{" "}
                {userDetails.lastName}
              </p>
            )} */}
            {/* Tambahkan informasi profil lainnya di sini */}
          </div>
          <button
            className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default ProfilePage;