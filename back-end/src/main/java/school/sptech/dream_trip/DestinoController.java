package school.sptech.dream_trip;


import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.print.DocFlavor;
import java.awt.dnd.DragGestureEvent;
import java.sql.PreparedStatement;
import java.util.List;

@RestController
@RequestMapping("/destinos")
@CrossOrigin(origins = "http://localhost:5173")
public class DestinoController {

    private final JdbcTemplate jdbcTemplate;

    public DestinoController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping
    public ResponseEntity<List<Destino>> listarDestinos(){

        String sql = "SELECT id, nome, cidade, pais, continente,categoria," +
                " custoEstimado, prioridade, status, observacao FROM destinos";


        List<Destino> destinos = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Destino.class));

        return ResponseEntity.status(200).body(destinos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Destino> listarPorId (@PathVariable Integer id){

        String sql = "SELECT id, nome, cidade, pais, continente,categoria," +
                " custoEstimado, prioridade, status, observacao FROM destinos WHERE id = ?";

        List<Destino> resultado = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Destino.class),id);

        if (resultado.isEmpty()){
            return ResponseEntity.status(404).build();
        }

        return ResponseEntity.status(200).body(resultado.get(0));



    }


    @PostMapping
    public ResponseEntity<Destino> cadastrar(@RequestBody Destino destino){

        if (destino.getNome() == null || destino.getNome().isBlank()){
            return ResponseEntity.status(400).build();
        }

        if (destino.getCidade() == null || destino.getCidade().isBlank()){
            return ResponseEntity.status(400).build();
        }

        if (destino.getPais() == null || destino.getPais().isBlank()){
            return ResponseEntity.status(400).build();
        }

        if (destino.getContinente() == null || destino.getContinente().isBlank()){
            return ResponseEntity.status(400).build();
        }

        if (destino.getCategoria() == null || destino.getCategoria().isBlank()){
            return ResponseEntity.status(400).build();
        }

        if (destino.getCustoEstimado() == null || destino.getCustoEstimado() < 0){
            return ResponseEntity.status(400).build();
        }

        if (destino.getPrioridade() == null || destino.getPrioridade().isBlank()){
            return ResponseEntity.status(400).build();
        }

        if (!destino.getPrioridade().equalsIgnoreCase("ALTA") &&
                !destino.getPrioridade().equalsIgnoreCase("MEDIA") &&
                !destino.getPrioridade().equalsIgnoreCase("BAIXA")){

            return ResponseEntity.status(400).build();

        }

        if (destino.getStatus() == null || destino.getStatus().isBlank()){
            return ResponseEntity.status(400).build();
        }



        if (!destino.getStatus().equalsIgnoreCase("QUERO_CONHECER") &&
        destino.getStatus().equalsIgnoreCase("PLANEJANDO") &&
        destino.getStatus().equalsIgnoreCase("VISITADO")){
            return ResponseEntity.status(400).build();
        }

        String sql = "INSERT INTO destinos (nome,cidade,pais,continente,categoria,custoEstimado,prioridade," +
                "status,observacao) VALUES (?,?,?,?,?,?,?,?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(con -> {
            PreparedStatement preparedStatement = con.prepareStatement(sql, new String[]{"id"});


            preparedStatement.setString(1, destino.getNome());
            preparedStatement.setString(2, destino.getCidade());
            preparedStatement.setString(3, destino.getPais());
            preparedStatement.setString(4, destino.getContinente());
            preparedStatement.setString(5, destino.getCategoria());
            preparedStatement.setDouble(6, destino.getCustoEstimado());
            preparedStatement.setString(7, destino.getPrioridade());
            preparedStatement.setString(8, destino.getStatus());
            preparedStatement.setString(9, destino.getObservacao());

            return preparedStatement;
        },keyHolder);

        destino.setId(keyHolder.getKey().intValue());
        return ResponseEntity.status(201).body(destino);


    }


}
