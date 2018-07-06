/**
 * @flow
 */
import firebase from './modules/core/firebase';
/*
 * Import App types
 */
import type App from './modules/core/app';
/*
 * Import Auth types
 */
import type {
  ActionCodeInfo,
  ActionCodeSettings,
  AdditionalUserInfo,
  AuthCredential,
  UserCredential,
  UserInfo,
  UserMetadata,
} from './modules/auth/types';
import type ConfirmationResult from './modules/auth/phone/ConfirmationResult';
import type User from './modules/auth/User';
/*
 * Import Database types
 */
import type DataQuery from './modules/database/Query';
import type DataSnapshot from './modules/database/DataSnapshot';
import type OnDisconnect from './modules/database/OnDisconnect';
import type Reference from './modules/database/Reference';
/*
 * Import Firestore types
 */
import type {
  MetadataChanges,
  SetOptions,
  SnapshotMetadata,
} from './modules/firestore/types';
import type CollectionReference from './modules/firestore/CollectionReference';
import type DocumentChange from './modules/firestore/DocumentChange';
import type DocumentReference from './modules/firestore/DocumentReference';
import type DocumentSnapshot from './modules/firestore/DocumentSnapshot';
import type FieldPath from './modules/firestore/FieldPath';
import type FieldValue from './modules/firestore/FieldValue';
import type GeoPoint from './modules/firestore/GeoPoint';
import type Query from './modules/firestore/Query';
import type QuerySnapshot from './modules/firestore/QuerySnapshot';
import type WriteBatch from './modules/firestore/WriteBatch';
/*
 * Import Messaging types
 */
import type RemoteMessage from './modules/messaging/RemoteMessage';
/*
 * Import Notifications types
 */
import type Notification, {
  NotificationOpen,
} from './modules/notifications/Notification';

/*
 * Export firebase instance
 */
export default firebase;

/*
 * Export types
 */
export type {
  // App Types
  App,
  // Auth Types
  ActionCodeInfo,
  ActionCodeSettings,
  AdditionalUserInfo,
  AuthCredential,
  ConfirmationResult,
  User,
  UserCredential,
  UserInfo,
  UserMetadata,
  // Database Types
  DataQuery,
  DataSnapshot,
  OnDisconnect,
  Reference,
  // Firestore Types
  CollectionReference,
  DocumentChange,
  DocumentReference,
  DocumentSnapshot,
  FieldPath,
  FieldValue,
  GeoPoint,
  MetadataChanges,
  Query,
  QuerySnapshot,
  SetOptions,
  SnapshotMetadata,
  WriteBatch,
  // Messaging Types
  RemoteMessage,
  // Notification Types
  Notification,
  NotificationOpen,
};
