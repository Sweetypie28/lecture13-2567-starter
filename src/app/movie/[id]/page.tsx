import { movieIdPageParams } from '@lib/types'
import { movieDB } from '@lib/movieDB';
import { IconStar } from '@tabler/icons-react';

export default function MovieIdPage({params}: movieIdPageParams) {
    const id =Number(params.id);
    const selectedMovie = movieDB.find((movie) => movie.id === id);

//falsy value: false, undefined, null, 0, ""
if(!selectedMovie){
    return <p>Movie is not found 🙅🏻‍♀️!!!</p>
}

    return (
    <div className="d-flex justify-content-center gap-4 mx-auto my-3">
        <img src={selectedMovie?.imgSrc} width="200"/>
        <div>
            <p className="fw-bold fs-4">{selectedMovie?.title}</p>
            <p>{selectedMovie?.detail}</p>
            <span className="fw-bold fs-4 text-primary d-flex gap-1">
                <IconStar size={35} /> 
                {selectedMovie?.rating}
            </span>
        </div>
    </div>
  )
}
