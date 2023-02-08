package com.sofka.spaceships.dto;

public class ThrustSpaceshipDto extends SpaceshipDto {
    public ThrustSpaceshipDto() {
        super();
    }

    private Integer pushingPower;

    public Integer getPushingPower() {
        return pushingPower;
    }

    public void setPushingPower(Integer pushingPower) {
        this.pushingPower = pushingPower;
    }
}
