import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import {
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

import { getDownloadURL, getStorage, uploadBytes, ref } from "firebase/storage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const db = getFirestore();
const storage = getStorage();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [profileData, setProfileData] = useState(null);

  // signup

  const signup = async (email, password, name, number) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(result);
      const ref = doc(db, "users", result.user.uid);
      const docref = await setDoc(ref, {
        email: result.user.email,
        uid: result.user.uid,
        userName: name,
        phoneNumber: number,
      })
        .then((re) => {
          alert("Data entered");
          navigate("/dashboard");
        })
        .catch((e) => {
          console.log(e.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  //sign In
  const signIn = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/dashboard/applications");
    } catch (error) {
      console.log(error.message);
    }
  };

  //logout
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("user Logges out");
    } catch (error) {
      console.log(error.message);
    }
    navigate("/login");
  };

  //get current_user

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(currentUser);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    getCurrentUserData(currentUser?.uid, setProfileData);
  }, [currentUser]);

  const uploadDataToFireStore = (data) => {
    const newData = { ...data };
    console.log("uploading.....");

    // console.table(newData);

    const ref = doc(db, "users", currentUser.uid);
    try {
      setDoc(ref, newData, { merge: true });
      alert("Data Entered");
    } catch (e) {
      alert("ProblemOccured");
      console.log(e);
    }
  };

  const uploadDataToFireStoreInArray = async (data, type) => {
    const newData = {
      [type]: arrayUnion({
        ...data,
        id: Date.now(),
      }),
    };
    const ref = doc(db, "users", currentUser.uid);
    const docref = await updateDoc(ref, newData, { merge: true });
    alert("data entered");
  };

  const getCurrentUserData = async (id, setProfileData) => {
    const docref = doc(db, "users", id);
    // const docSnap = await getDoc(docref);

    // if (docSnap.exists()) {
    //   console.log(docSnap.data());
    //   setProfileData(docSnap.data());
    // } else {
    //   console.log("No such document!");
    // }

    const unsub = onSnapshot(docref, (value) => {
      if (value.exists()) {
        console.log("Current Data : ", value.data());
        setProfileData(value.data());
      } else {
        console.log("No such document!");
      }
    });
  };

  const uploadDocument = async (file, docname, currentUser) => {
    const fileRef = ref(storage, `documents/${currentUser.uid}_${docname}`);

    const snapshot = await uploadBytes(fileRef, file);
    const keyName = await getDownloadURL(fileRef);
    console.log(keyName);
    toast.success("File uploaded successfully!", {
      className: "foo-bar",
    });
    <ToastContainer style={{ zIndex: "1000" }} />;

    const ref_doc = doc(db, "users", currentUser.uid);
    const date = new Date();
    const day = date.toLocaleString("en-us", { weekday: "long" });

    const newData = {
      documents: arrayUnion({
        id: Date.now(),
        title: docname,
        url: keyName,
        date: date.getDate() + " " + day + " " + date.getFullYear(),
      }),
    };

    // lastUpdateda: date,
    const docref = await updateDoc(ref_doc, newData, { merge: true });
    // alert("Updated Profile");
    // updateProfile(currentUser, { keyName });
    alert(`added ${docname}}`);
  };

  const uploadImage = async (file, fileExtension, setLoading) => {
    const fileRef = ref(
      storage,
      `profile_pictures/${currentUser.uid}.${fileExtension}`
    );

    setLoading(true);
    const metadata = {
      contentType: `image/${fileExtension}`,
    };

    const snapshot = await uploadBytes(fileRef, file, metadata);
    const photoURL = await getDownloadURL(fileRef);
    const data = {
      photoURL: photoURL,
    };

    uploadDataToFireStore(data);

    updateProfile(currentUser, { photoURL });
    setLoading(false);

    alert("Huraa uploaded successfully");
  };

  const handelDocumentDelete = (docId, feild) => {
    // console.log(id);

    if (window.confirm("Are you sure")) {
      const dataArray = profileData?.[feild];
      const objectIndex = dataArray.findIndex((obj) => obj.id === docId);
      const docref = doc(db, "users", currentUser.uid);
      if (objectIndex !== -1) {
        console.log(dataArray[objectIndex]);
        dataArray.splice(objectIndex, 1);

        updateDoc(docref, {
          [feild]: dataArray,
        })
          .then(() => {
            console.log("Document removed");
            alert("Removed Document");
          })
          .catch((err) => {
            console.log("Error occured in removal", err);
          });
      } else {
        console.log("not working");
      }
    } else {
      console.log("okay");
    }
  };

  const value = {
    currentUser,
    signup,
    signIn,
    logout,
    uploadDataToFireStore,
    uploadDataToFireStoreInArray,
    getCurrentUserData,
    profileData,
    uploadDocument,
    handelDocumentDelete,
    uploadImage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
