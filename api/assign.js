let participants = [
  "Diego",
  "Pepito",
  "Memima",
  "Daniela",
  "Renzo",
  "Majo",
  "Maya",
  "Adri",
  "Gordito"
];

let usedAssignments = {}; // name -> assigned

export default function handler(req, res) {
  const name = req.query.name;

  if (!name) return res.json({ error: "Falta el nombre." });

  if (!participants.includes(name)) {
    return res.json({ error: "Ese nombre no está en la lista." });
  }

  // Si ya tiene asignado, solo se lo mostramos
  if (usedAssignments[name]) {
    return res.json({ assigned: usedAssignments[name] });
  }

  // Filtramos candidatos válidos
  const available = participants.filter(
    p => p !== name && !Object.values(usedAssignments).includes(p)
  );

  if (available.length === 0) {
    return res.json({ error: "Ya no quedan personas disponibles." });
  }

  // Elegir uno aleatorio
  const assigned = available[Math.floor(Math.random() * available.length)];

  usedAssignments[name] = assigned;

  res.json({ assigned });
}
