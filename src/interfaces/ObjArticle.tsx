// abbiamo importato l'oggeto tipo delle card ed esportato in modo che possa essere presente in tutti i componenti che ne hanno bisogno

export interface AnArticle {
  id: number;
  title: string;
  image_url: string;
  summary: string;
  published_at: string;
}
