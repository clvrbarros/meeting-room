package com.example.meetingroom.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private String startHour;

    @Column(nullable = false)
    private String endHour;

    @Override
    public String toString() {
        return String.format("Roomd [id = %d, name = %s, startHour = %s, endHour = %s", this.id, this.name, this.startHour, this.endHour);
    }

}
