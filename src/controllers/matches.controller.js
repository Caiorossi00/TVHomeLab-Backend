import { getTodayMatches } from '../services/matches.service.js';

export async function getTodayMatchesController(req, res) {
  try {
    const matches = await getTodayMatches();

    return res.status(200).json({
      success: true,
      data: matches,
    });
  } catch {
    return res.status(500).json({
      success: false,
      error: {
        code: 'MATCHES_FETCH_ERROR',
        message: 'Não foi possível consultar as partidas.',
      },
    });
  }
}
