import { createClient } from "@supabase/supabase-js";

export const VITE_SUPABASE_URL = "https://rkbkvnflkagvrnoriggr.supabase.co";
const VITE_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrYmt2bmZsa2FndnJub3JpZ2dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyNTQ4ODUsImV4cCI6MjA4MTgzMDg4NX0.Fset7LJ5-oehR-oMs9U7HXbZs12rSn8VcOGPNqOcagQ";

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

export default supabase;

// export default function SupabaseService() {
//   const [instruments, setInstruments] = useState([]);

//   useEffect(() => {
//   async function getInstruments() {
//     const { data } = await supabase.from("instruments").select();
//     setInstruments(data);
//   }
//   getInstruments();
//   }, []);
//   return (
//     <ul>
//       {instruments.map((instrument) => (
//         <li key={instrument.name}>{instrument.name}</li>
//       ))}
//     </ul>
//   );
// }
