import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Observable, of } from "rxjs";

export const guard = () => {
    // let auth = inject(AuthService)
    // return auth.isLogedIn;
    return Boolean(sessionStorage.getItem("isAuthenticated")) 
}

