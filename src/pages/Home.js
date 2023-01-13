import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    // getPosts();}, [deletePost]);
    getPosts();}, []);


  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;



// // import React, { useEffect, useState } from "react";
// // import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// // import { auth, db } from "../firebase-config";

// // function Home (){
// // // const Home = () => {
// //   const [postLists, setPostList] = useState([]);
// //   const postsCollectionRef = collection(db, "posts");
  
// //   useEffect (() => {
// //     const getPosts = async () => {
// //       const data = await getDocs(postsCollectionRef);
// //       console.log(data);
// //     };

// //     getPosts();
// //   });

// //   return <div className="homePage"></div>;



// //    //      //
// //   // return (
// //   //   <div className="homePage">
// //   //     <h1>Welcome to the Home Page!</h1>
// //   //     <p>This is where you can find all the latest news and updates.</p>
// //   //   </div>
// //   //   // 
    

// //   // );
// // }
  

// // export default Home;

// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc, query, QuerySnapshot } from "firebase/firestore";
// import { auth, db } from "../firebase-config";

// const Home = () => {
//   const [loading, setLoading] = useState(true);
//   const [posts, setPosts] = useState([]);

// //   useEffect(() => {
// //     const getPostsFromFirebase = [];
// //     const subscriber = db
// //       .collection("SurveyResponses")
// //       .onSnapshot((querySnapshot) => {
// //         querySnapshot.forEach((doc) => {
// //           getPostsFromFirebase.push({
// //             ...doc.data(), //spread operator
// //             key: doc.id, // `id` given to us by Firebase
// //           });
// //         });
// //         setPosts(getPostsFromFirebase);
// //         setLoading(false);
// //       });


// // })

// return  (
  
//   <div className="homePage">
//    <h1>Latest posts are here!</h1>


//   </div>
// );


// };

// export default Home;