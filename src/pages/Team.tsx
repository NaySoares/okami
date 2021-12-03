import { ContentStaff } from "../components/Team/ContentStaff/ContentStaff";
import '../styles/team.scss';

export function Team() {
  return(
    <main className="teamContainer">
      <section className="teamStaff">
        <ContentStaff />
      </section>
    </main>
  )
}