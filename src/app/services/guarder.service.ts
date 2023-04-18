import { inject } from "@angular/core"
import { AuthService } from "./auth.service"

export const guard  =  () => {
    let auth = inject(AuthService);
    return auth.isLogedIn;
}

