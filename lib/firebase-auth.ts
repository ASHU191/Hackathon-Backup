import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    updateProfile,
    signOut,
    type User as FirebaseUser,
  } from "firebase/auth"
  import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"
  import { auth, db } from "./firebase"
  
  // User type definition
  export interface FirebaseUserData {
    uid: string
    email: string
    displayName?: string
    photoURL?: string
    bio?: string
    location?: string
    website?: string
    github?: string
    linkedin?: string
    twitter?: string
    skills: string[]
    hackathons: string[]
    teams: string[]
    badges: string[]
    createdAt: any
    updatedAt?: any
  }
  
  // Firebase authentication functions
  export const firebaseAuth = {
    // Register a new user
    register: async (email: string, password: string, name?: string): Promise<FirebaseUser> => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
  
        // Update profile with display name
        if (name) {
          await updateProfile(user, { displayName: name })
        }
  
        // Create user document in Firestore
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: user.email,
          displayName: name || email.split("@")[0],
          photoURL: user.photoURL,
          skills: [],
          hackathons: [],
          teams: [],
          badges: [],
          createdAt: serverTimestamp(),
        })
  
        return user
      } catch (error: any) {
        throw new Error(error.message || "Failed to register")
      }
    },
  
    // Login user with email and password
    login: async (email: string, password: string): Promise<FirebaseUser> => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential.user
      } catch (error: any) {
        throw new Error(error.message || "Failed to login")
      }
    },
  
    // Login with Google
    loginWithGoogle: async (): Promise<FirebaseUser> => {
      try {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        const user = result.user
  
        // Check if user document exists, if not create one
        const userDoc = await getDoc(doc(db, "users", user.uid))
        if (!userDoc.exists()) {
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            skills: [],
            hackathons: [],
            teams: [],
            badges: [],
            createdAt: serverTimestamp(),
          })
        }
  
        return user
      } catch (error: any) {
        throw new Error(error.message || "Failed to login with Google")
      }
    },
  
    // Login with GitHub
    loginWithGithub: async (): Promise<FirebaseUser> => {
      try {
        const provider = new GithubAuthProvider()
        const result = await signInWithPopup(auth, provider)
        const user = result.user
  
        // Check if user document exists, if not create one
        const userDoc = await getDoc(doc(db, "users", user.uid))
        if (!userDoc.exists()) {
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            skills: [],
            hackathons: [],
            teams: [],
            badges: [],
            createdAt: serverTimestamp(),
          })
        }
  
        return user
      } catch (error: any) {
        throw new Error(error.message || "Failed to login with GitHub")
      }
    },
  
    // Logout user
    logout: async (): Promise<void> => {
      try {
        await signOut(auth)
      } catch (error: any) {
        throw new Error(error.message || "Failed to logout")
      }
    },
  
    // Get current user
    getCurrentUser: (): FirebaseUser | null => {
      return auth.currentUser
    },
  
    // Get user data from Firestore
    getUserData: async (userId: string): Promise<FirebaseUserData | null> => {
      try {
        const userDoc = await getDoc(doc(db, "users", userId))
        if (userDoc.exists()) {
          return userDoc.data() as FirebaseUserData
        }
        return null
      } catch (error) {
        console.error("Error getting user data:", error)
        return null
      }
    },
  
    // Update user profile
    updateUserProfile: async (
      user: FirebaseUser,
      updates: { displayName?: string; photoURL?: string },
    ): Promise<void> => {
      try {
        await updateProfile(user, updates)
  
        // Update Firestore document
        await setDoc(
          doc(db, "users", user.uid),
          {
            displayName: updates.displayName || user.displayName,
            photoURL: updates.photoURL || user.photoURL,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        )
      } catch (error: any) {
        throw new Error(error.message || "Failed to update profile")
      }
    },
  }
  
  