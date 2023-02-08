package com.sofka.spaceships.persistence.repositories;

import com.sofka.spaceships.persistence.domain.Spaceship;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpaceshipRepository extends JpaRepository<Spaceship, Long> {
}
