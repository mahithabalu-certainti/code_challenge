const createStudent = async (req, res) => {
  try {
    const { Student, subjects, metadata } = req.body;
    if (!Student || !subjects || !metadata) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const student = await pool.query(
      "INSERT INTO student_details (student_name, student_id, student_age) VALUES ($1, $2, $3) RETURNING *",
      [Student.name, Student.id, Student.age]
    );
    const studentId = student.rows[0].student_id;
    for (let subject of subjects) {
      await pool.query(
        "INSERT INTO subject_details (student_id, name, scores) VALUES ($1, $2, $3::int[])",
        [studentId, subject.name, subject.scores]
      );
    }
    const metadata = await pool.query(
      "INSERT INTO metadata_details (student_id, semester, institution) VALUES ($1, $2, $3) RETURNING *",
      [studentId, metadata.semester, metadata.institution]
    );
    res.status(201).json({
      message: "Student created successfully",
      student: student.rows[0],
      metadata: metadata.rows[0]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};