import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Observable, of } from "rxjs";

export const guard = () => {
    return Boolean(sessionStorage.getItem("isAuthenticated")) 
}

