import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStore, AngularFireStoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from "rxjs/operators";
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;



  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFireStore,
    private router: Router
  ) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else {
          return of(null);
        }
      })
    )
  }

}
