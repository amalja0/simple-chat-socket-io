package com.tujuhsembilan.socketio.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tujuhsembilan.socketio.model.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, UUID> {
    List<Message> findAllByRoom(String room);
}
