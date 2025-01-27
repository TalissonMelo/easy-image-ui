import GalleryPage from "./gallery/page";
import Login from "./login/page";
import { useAuth } from "./services/user/authentication.service";

export default function Home() {
  const auth = useAuth();
  const user = auth.getUserSession();

  if (!user) {
    return <Login />;
  }

  return <GalleryPage />;
}
